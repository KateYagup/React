import React, { Component } from "react";
import Offline from "./Offline";
import Online from "./Online";

const Status = ({ isOnline }) => {
    return (
        <div>
            {
                isOnline ?
                    < Online />
                    : <Offline />
            }
        </div>
    )
}

export default Status;