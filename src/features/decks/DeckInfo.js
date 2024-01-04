import React, { useEffect, useState } from "react";
import { readDeck } from "../../utils/api";
import { useParams } from "react-router-dom";
import CardItem from "../cards/CardItem";
import DeckDeleteButton from "./DeckDeleteButton";
import NavBreadcrumb from "../../Layout/NavBreadcrumb";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function DeckInfo({ decks, handleDeckDelete, handleCardDelete }){
    const [deck, setDeck] = useState({});
    const { deckId } = useParams();

    useEffect(async () => {
        const viewDeck = await readDeck(deckId);
        setDeck(viewDeck);
    }, [deckId]);
    
    if(deck.name){
        console.log("Current deck: ", deck);
        console.log("List of decks: ", decks);
        return (
            <>
                <NavBreadcrumb currentNav={deck.name}/>
                <div className="row">
                    <div className="col">
                        <h3>{deck.name}</h3>
                        <p>{deck.description}</p>
                    </div>
                    <div className="w-100"></div>
                    <div className="col">
                    <Link to={`/decks/${deck.id}/edit`}>
                        <button type="button" className="btn btn-primary btn-sm" name="edit">Edit</button>
                    </Link>
                    <Link to={`/decks/${deck.id}/study`}>
                        <button type="button" className="btn btn-primary btn-sm" name="study" >Study</button>
                    </Link>
                    <Link to={`/decks/${deck.id}/cards/new`}>
                        <button type="button" className="btn btn-primary btn-sm" name="addCard">+ Add Cards</button>
                    </Link>
                    </div>
                    <div className="col">
                        <button type="button" className="btn btn-danger btn-sm" name="delete" onClick={() => handleDeckDelete(deck.id)} >Delete</button>
                    </div>
                </div>
                <br />
                <br />
                <h2>Cards</h2>
                {deck.cards.map((card, index) => (
                    <CardItem 
                        key={index} 
                        card={card}
                        handleCardDelete={() => handleCardDelete(card.id)} />
                ))}
            </>
        );
        
    }

    return 'Loading...';
}

export default DeckInfo;