import React, { Component } from "react";
import Offline from "./Offline";
import Online from "./Online";

class Status extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOnline: true
        }
    }

    setOnline = isOnline => {
        this.setState({
            isOnline
        })
    }

    render() {
        return (
            <div>
                {
                    this.state.isOnline ?
                        < Online />
                        : <Offline />
                }
            </div>
        );
    }
}

export default Status;