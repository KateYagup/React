import React from "react";

const Filter = ({ filterText }) => {

    const dataToFind = filterText => {
        console.log(filterText);
    }
    return (
        <input
            className="filter__input"
            value={filterText}
            onChange={onChange}
        />
    )

}

export default Filter;