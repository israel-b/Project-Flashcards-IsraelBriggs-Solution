import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBreadcrumb from "../../Layout/NavBreadcrumb";
import { readDeck } from "../../utils/api";
import { useHistory } from "react-router-dom";
import CardForm from "./CardForm";

function CardCreate() {
    const [deck, setDeck] = useState({});
    const { deckId } = useParams();
    const history = useHistory();

    useEffect(async () => {
        const viewDeck = await readDeck(deckId);
        setDeck(viewDeck);
    }, [deckId]);

    if(deck.name){
        return (
            <>
                <NavBreadcrumb currentNav={deck.name} subNav={"Add Card"} />
                <h1>{deck.name}: Add Card</h1>
                <CardForm deck={deck} />
            </>
        )
    }

    return "Loading...";
}

export default CardCreate;