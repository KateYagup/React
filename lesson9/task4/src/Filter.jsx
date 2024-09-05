import React from "react";

const Filter = ({ filterText, onChange }) => {

    const dataToFind = filterText => {
        console.log('filterText');
        console.log(filterText);
    }
    console.log(filterText);
    return (
        <input
            type='text'
            className="filter__input"
            value={filterText}
            onChange={onChange}
        />
    )

}

export default Filter;