import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBreadcrumb from "../../Layout/NavBreadcrumb";
import { readCard, readDeck, updateCard } from "../../utils/api";
import CardForm from "./CardForm";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

function CardEdit() {
    const initialFormState = {
        front: "",
        back: ""
    };
    const [deck, setDeck] = useState({});
    const { deckId, cardId } = useParams();
    const history = useHistory();

    const [formData, setFormData] = useState({...initialFormState});

    useEffect(async () => {
        const viewDeck = await readDeck(deckId);
        const viewCard = await readCard(cardId);
        setDeck(viewDeck);
        setFormData(viewCard);
    }, [cardId]);

    const handleSubmit = (event) => {
        event.preventDefault();
        updateCard(formData).then(history.push(`/decks/${deckId}`));
    }

    if(formData.front){
        return (
            <>
                <NavBreadcrumb currentNav={deck.name} subNav={`Edit Card ${cardId}`} />
                <h1>Edit Card</h1>
                <CardForm handleSubmit={handleSubmit} formData={formData} setFormData={setFormData}  />
                
            </>
        );
    }

    return "Loading...";

}

export default CardEdit;