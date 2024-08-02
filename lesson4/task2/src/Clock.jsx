// put your code here
import React from "react";
import { Component } from "react";
import './clock.scss';

const getTimeWithOffset = offset => {
    const currentTime = new Date();
    const utcOffset = currentTime.getTimezoneOffset() / 60;
    return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
};

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            offset: getTimeWithOffset(this.props.offset),
            // offset: this.props.offset,
        }
        // setInterval(() => {
        //     this.setState({
        //         offset: this.state.offset + 1,
        //     })
        // }, 1000);
    }

    render() {
        return (
            <>
                <div className="clock">
                    <div className="clock__location">{this.props.location}</div>
                    <div className="clock__time">{this.state.offset}</div>
                </div>
            </>
        )
    }
}

export default Clock;

// put your code here
