import React from "react";
import DeckItem from "./DeckItem";

function DeckList({decks, cards, deleteDeck}) {
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
                            deleteDeck={() => deleteDeck(index)}
                            key={index}
                            deck={deck}
                            cards={cards}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default DeckList;