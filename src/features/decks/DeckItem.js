import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import DeckDeleteButton from "./DeckDeleteButton";

function DeckItem({ deck, cards, deleteDeck }) {
    // This card displays the deck information and delete button
  return (
      <tr>
        <td>{(deck.name)}</td>
        <td>{(deck.description)}</td>
        <td>{cards.filter((card) => card.deckId === deck.id).length}</td> 
        <td><Link to={`/decks/${deck.id}/study`}><button type="button" className="btn btn-light btn-sm" name="study" >Study</button></Link></td>
        <td><Link to={`/decks/${deck.id}`}><button type="button" className="btn btn-primary btn-sm" name="view" >View</button></Link></td>
        <td>
          <DeckDeleteButton deleteDeck={deleteDeck} />
        </td>
      </tr>
  );
}

export default DeckItem;