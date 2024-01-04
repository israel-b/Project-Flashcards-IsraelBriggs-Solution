import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";

function NotEnoughCards({ count, deckId }) {
    return(
        <>
            <h4>Not enough cards.</h4>
            <p>You need at least 3 cards to study. There are {count} cards in this deck.</p>
            <Link to={`/decks/${deckId}/cards/new`}>
                <button type="button" className="btn btn-primary btn-lg">+ Add Cards</button>
            </Link>
        </>
    );
}

export default NotEnoughCards;