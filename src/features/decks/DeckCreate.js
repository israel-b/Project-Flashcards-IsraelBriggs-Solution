import React, { useState } from "react";
import NavBreadcrumb from "../../Layout/NavBreadcrumb";
import DeckForm from "./DeckForm";

function DeckCreate({handleDeckCreate, decks}){
    // Blank initial form state
    const initialFormState = {
        id: decks.length + 1,
        name: "",
        description: "",
    };

    const [formData, setFormData] = useState({...initialFormState});

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submitted: ", formData);
        handleDeckCreate(formData);
    };
    
    return (
        <>
            <NavBreadcrumb currentNav={"Create Deck"} />
            <h1>Create Deck</h1>
            <DeckForm handleSubmit={handleSubmit} setFormData={setFormData} formData={formData} />
        </>
    );
}

export default DeckCreate;