import React, { useState } from "react";
import { useHistory } from "react-router-dom";


function DeckForm({deck, handleSubmit, formData, setFormData}){
    const history = useHistory();

    const handleChange = ({ target }) => {
        setFormData({...formData, [target.name]: target.value,});
    };

    return(
        <>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange}  />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea type="text" className="form-control" id="description" name="description" value={formData.description} onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-secondary" onClick={() => history.push("/")}>Cancel</button> <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}

export default DeckForm;