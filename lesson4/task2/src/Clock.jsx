// put your code here
import React from "react";
import { Component } from "react";
import './clock.scss';
import moment from 'moment';

const getTimeWithOffset = offset => {
    const currentTime = new Date();
    const utcOffset = currentTime.getTimezoneOffset() / 60;
    return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
};

console.log(getTimeWithOffset(-2));

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            offset: this.props.offset,
        }
        setInterval(() => {
            this.setState({
                offset: this.state.offset + 1,
            })
        }, 1000);
    }

    render() {
        console.log(this.props.offset);
        console.log(getTimeWithOffset(this.props.offset));
        const time = getTimeWithOffset(this.props.offset);
        console.log(time.getDay());
        return (
            <>
                <div className="clock">
                    <div className="clock__location">{this.props.location}</div>
                    <div className="clock__time">{moment(time).format('LTS')}</div>
                </div>
            </>
        )
    }
}

export default Clock;

// put your code here
