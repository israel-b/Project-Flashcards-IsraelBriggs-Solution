import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function DeckItem({ deck, handleDeckDelete }) {
    // This card displays the deck information and delete button
  return (
      <tr>
        <td>{(deck.name)}</td>
        <td>{(deck.description)}</td>
        <td>{deck.cards ? deck.cards.length : 0} cards</td> 
        <td><Link to={`/decks/${deck.id}/study`}><button type="button" className="btn btn-light btn-sm" name="study" >Study</button></Link></td>
        <td><Link to={`/decks/${deck.id}`}><button type="button" className="btn btn-primary btn-sm" name="view" >View</button></Link></td>
        <td><button type="button" className="btn btn-danger btn-sm" name="delete" onClick={handleDeckDelete} >Delete</button></td>
      </tr>
  );
}

export default DeckItem;