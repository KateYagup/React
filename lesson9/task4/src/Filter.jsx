import React from "react";

const Filter = ({ filterText, onChanges }) => {

    const dataToFind = filterText => {
        console.log('filterText');
        console.log(filterText);
    }
    return (
        <input
            className="filter__input"
            value={filterText}
            onChange={dataToFind}
        />
    )

}

export default Filter;