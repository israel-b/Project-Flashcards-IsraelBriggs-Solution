import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function CardItem({card, deleteCard}){
    return(
        <>
            <div className="container border">
                <div className="row">
                    <div className="col-sm">
                        {card.front}
                    </div>
                    <div className="col-sm">
                        {card.back}
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm ">
                        <Link to={`/decks/${card.deckId}/cards/${card.id}/edit`}>
                            <button>Edit</button>
                        </Link>
                        <button type="button" className="btn btn-danger btn-sm" name="delete" onClick={deleteCard}>Delete</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardItem;