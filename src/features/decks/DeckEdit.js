import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DeckForm from "./DeckForm";
import NavBreadcrumb from "../../Layout/NavBreadcrumb";
import { readDeck } from "../../utils/api";
import { useHistory } from "react-router-dom";

function DeckEdit() {
    const [deck, setDeck] = useState({});
    const [formData, setFormData] = useState({});
    const { deckId } = useParams();
    const history = useHistory();


    useEffect(async () => {
        const viewDeck = await readDeck(deckId);
        setDeck(viewDeck);
    }, [deckId]);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submitted: ")
    }

    if(deck.name){
        return (
            <>
                <NavBreadcrumb currentNav={deck.name} subNav={"Edit Deck"} />
                <h1>Edit Deck</h1>
                <DeckForm deck={deck} />
            </>
        );
    }

    return"Loading...";

}

export default DeckEdit;