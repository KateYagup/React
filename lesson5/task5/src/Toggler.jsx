import React, { Component } from "react";

class Toggler extends Component {
    constructor() {
        super();
        this.state = {
            onOff: 'Off',
        }

    }

    toggleFunc() {
        this.setState({
            onOff: this.state.onOff === 'Off' ? 'On' : 'Off',
        });
    }

    render() {
        return (
            <div className="toggler"
                onClick={() => this.toggleFunc()}>
                {this.state.onOff}
            </div >
        )
    }
}

export default Toggler;