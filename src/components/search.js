import React from 'react';
import Button from 'react-bootstrap/Button';

const Search = ({ handleInputChanged, handleSubmit }) => {
    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input placeholder="Enter book search term..." className="text-field" onChange={(e) => handleInputChanged(e)}
                    name='search' type="text" />
                <Button onClick={(e) => handleSubmit(e)}>Search books</Button>
            </form>
        </div>
    )
};

export default Search