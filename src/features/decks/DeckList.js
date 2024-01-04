import React from "react";
import DeckItem from "./DeckItem";

function DeckList({decks, handleDeckDelete}) {
    return (
        <div className="deck-list table">
            <table>
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Cards</th>
                        <th scope="col">Study</th>
                        <th scope="col">View</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {decks.map((deck, index) => (
                        <DeckItem 
                            handleDeckDelete={() => handleDeckDelete(deck.id)}
                            key={index}
                            deck={deck}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default DeckList;