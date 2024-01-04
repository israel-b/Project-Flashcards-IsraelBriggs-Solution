import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBreadcrumb from "../../Layout/NavBreadcrumb";
import { createCard, readDeck } from "../../utils/api";
import { useHistory } from "react-router-dom";
import CardForm from "./CardForm";

function CardCreate() {
    const [deck, setDeck] = useState({ cards: []});
    const { deckId } = useParams();
    const history = useHistory();

    const initialFormState = {
        front: "",
        back: ""
    };

    const [formData, setFormData] = useState({...initialFormState});

    useEffect(() => {
        async function loadDeck() {
            const viewDeck = await readDeck(deckId);
            setDeck(viewDeck);
        }
        loadDeck();
    }, [deckId]);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submitted: ", formData);
        createCard(deckId, formData).then(() => {
            setDeck({...deck, cards: [...deck.cards, formData]});
            history.push(`/decks/${deckId}`);
        });  
    }

    if(deck.name){
        return (
            <>
                <NavBreadcrumb currentNav={deck.name} subNav={"Add Card"} />
                <h1>{deck.name}: Add Card</h1>
                <CardForm handleSubmit={handleSubmit} formData={formData} setFormData={setFormData} deck={deck} />
            </>
        )
    }

    return "Loading...";
}

export default CardCreate;