import React, { useState } from "react";
import { useHistory } from "react-router-dom";


function CardForm({deck, card}) {
    const initialFormState = {
        front: "",
        back: ""
    };
    if(card){
        initialFormState.front = card.front;
        initialFormState.back = card.back;
        
    }

    const [formData, setFormData] = useState({...initialFormState});
    const history = useHistory();
    
    const handleChange = ({ target }) => {
        setFormData({...formData, [target.name]: target.value,});
    };

    return(
        <>
            <form>
                <div className="form-group">
                    <label htmlFor="front">Front</label>
                    <textarea type="text" className="form-control" id="front" name="front" value={formData.front} onChange={handleChange}  />
                </div>
                <div className="form-group">
                    <label htmlFor="back">Back</label>
                    <textarea type="text" className="form-control" id="back" name="back" value={formData.back} onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-secondary" onClick={() => history.push("/")}>Cancel</button> <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
    
}

export default CardForm;