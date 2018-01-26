/**
 * Created by didi on 2017.01.25
 **/
import React from 'react';

const Input = ({onInputChange, onInputSubmit, newToDo}) => {
    return (
        <form>
            <div
                className="form-group">
                <label
                    htmlFor="listInput">
                    What do you want to do
                </label>
                <input
                    style={styleDes.inputStyle}
                    type="text"
                    value={newToDo}
                    className="form-control"
                    id="listItemInput"
                    placeholder="Add new todo"
                    onChange={onInputChange}
                />
                <button
                    className="btn btn-primary"
                    onClick={onInputSubmit}
                >
                    Add Item
                </button>
            </div>
        </form>
    )
};

const styleDes = {
    inputStyle: {
        width: 600,
        display: 'inline-block',
        margin: '0 20px',
    },
};

export default Input;