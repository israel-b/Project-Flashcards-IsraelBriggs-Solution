import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DeckForm from "./DeckForm";
import NavBreadcrumb from "../../Layout/NavBreadcrumb";
import { readDeck } from "../../utils/api";
import { useHistory } from "react-router-dom";

function DeckEdit() {
    const initialFormState = {
        name: "",
        description: "",
    };

    const [deck, setDeck] = useState({});
    const [formData, setFormData] = useState({...initialFormState});
    const { deckId } = useParams();
    const history = useHistory();


    useEffect(async () => {
        const viewDeck = await readDeck(deckId);
        setFormData(viewDeck);
    }, [deckId]);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submitted: ", formData)
    }

    if(formData.name){
        return (
            <>
                <NavBreadcrumb currentNav={formData.name} subNav={"Edit Deck"} />
                <h1>Edit Deck</h1>
                <DeckForm handleSubmit={handleSubmit} setFormData={setFormData} formData={formData} deck={deck} />
            </>
        );
    }

    return"Loading...";

}

export default DeckEdit;