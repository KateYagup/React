import React from "react";
import UsersList from "./UsersList";

const Filter = props => {
    const dataToFind = data => {
        console.log(data);
    }
    return (
        <div onChange={dataToFind}>{data}</div>
    )

}

export default Filter;