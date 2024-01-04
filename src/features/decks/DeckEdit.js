import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DeckForm from "./DeckForm";
import NavBreadcrumb from "../../Layout/NavBreadcrumb";
import { readDeck } from "../../utils/api";
import { useHistory } from "react-router-dom";

function DeckEdit({handleDeckEdit}) {
    const initialFormState = {
        name: "",
        description: "",
    };

    const [formData, setFormData] = useState({...initialFormState});
    const { deckId } = useParams();
    const history = useHistory();


    useEffect(() => {
        async function loadDeck() {
            const viewDeck = await readDeck(deckId);
            setFormData(viewDeck);
        }
        loadDeck();
    }, [deckId]);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submitted: ", formData)
        handleDeckEdit(formData);
        history.push("/");
    }

    if(formData.name){
        return (
            <>
                <NavBreadcrumb currentNav={formData.name} subNav={"Edit Deck"} />
                <h1>Edit Deck</h1>
                <DeckForm handleSubmit={handleSubmit} setFormData={setFormData} formData={formData} />
            </>
        );
    }

    return"Loading...";

}

export default DeckEdit;