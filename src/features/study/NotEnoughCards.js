import React from "react";

function NotEnoughCards({ count }) {
    return(
        <>
            <h4>Not enough cards.</h4>
            <p>You need at least 3 cards to study. There are {count} cards in this deck.</p>
            <button type="button" className="btn btn-primary btn-lg">+ Add Cards</button>
        </>
    );
}

export default NotEnoughCards;