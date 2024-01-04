import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBreadcrumb from "../../Layout/NavBreadcrumb";
import { readCard, readDeck } from "../../utils/api";
import CardForm from "./CardForm";

function CardEdit() {
    const [deck, setDeck] = useState({});
    const [card, setCard] = useState({});
    const { deckId, cardId } = useParams();

    useEffect(async () => {
        const viewDeck = await readDeck(deckId);
        const viewCard = await readCard(cardId);
        setDeck(viewDeck);
        setCard(viewCard);
    }, []);

    if(card.front){
        return (
            <>
                <NavBreadcrumb currentNav={deck.name} subNav={`Edit Card ${cardId}`} />
                <h1>Edit Card</h1>
                <CardForm deck={deck} card={card} />
                
            </>
        );
    }

    return "Loading...";

}

export default CardEdit;