import React from "react";
import { useHistory } from "react-router-dom";

function CreateDeckButton() {
  const history = useHistory();
  return (
    <button 
        type="button" 
        className="btn btn-secondary btn-lg" 
        onClick={() => history.push("/decks/new")}
    >
        + Create Deck
    </button>
      
  );
}

export default CreateDeckButton;
