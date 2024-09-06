import React from "react";

const Filter = ({ count, filterText, onChange }) => {

    // console.log('filterText');
    // console.log(filterText);
    return (
        <>
            <span className='filter__count'>{count}</span>
            <input
                type='text'
                className="filter__input"
                value={filterText}
                onChange={onChange}
            />
        </>
    )

}

export default Filter;