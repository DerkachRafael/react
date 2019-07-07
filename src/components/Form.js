import React, {useState} from 'react';

const Form = ({onChangeHandler}) => {
    return (
        <form className="mx-auto" style={{width: 600}}>
            <div className="form-group">
                <label htmlFor="select-size">Select size of table</label>
                <select className="form-control" id="select-size" name="size-table" onChange={onChangeHandler}>
                    <option>1</option>
                    <option>2</option>
                </select>
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </form>
    )
};

export default Form;