import React from "react";
import UsersList from "./UsersList";

const Filter = ({ filterText }) => {

    const dataToFind = filterText => {
        console.log(filterText);
    }
    return (
        <span onChange={dataToFind}>{filterText}</span>
    )

}

export default Filter;