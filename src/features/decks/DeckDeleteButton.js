function DeckDeleteButton({ handleDeckDelete }) {
    return (
      <button 
          type="button" 
          className="btn btn-danger btn-sm"
          name="delete" 
          onClick={handleDeckDelete}
      >
          Delete
      </button>
        
    );
  }
  
  export default DeckDeleteButton;