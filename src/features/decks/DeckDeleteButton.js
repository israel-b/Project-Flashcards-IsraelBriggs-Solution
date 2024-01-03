function DeckDeleteButton({ deleteDeck }) {
    return (
      <button 
          type="button" 
          className="btn btn-danger btn-sm"
          name="delete" 
          onClick={deleteDeck}
      >
          Delete
      </button>
        
    );
  }
  
  export default DeckDeleteButton;