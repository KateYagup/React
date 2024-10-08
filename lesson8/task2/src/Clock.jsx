import React, { Component } from 'react';

class Clock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // date: new Date(),
            date: this.getTimeWithOffset(this.props.offset),
            // utcOffset: new Date().getTimezoneOffset() / 60,
            // currTime: new Date(new Date().setHours(new Date().getHours() + this.props.offset + this.utcOffset)),
        }
        // this.getTimeWithOffset.bind(this);
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({
                date: this.getTimeWithOffset(this.props.offset),
            })
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    getTimeWithOffset(offset) {
        const currentTime = new Date();
        const utcOffset = currentTime.getTimezoneOffset() / 60;
        const result = new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
        return result;
    };

    render() {
        return <div className='clock'>
            <div className="clock__location">{this.props.location}</div>
            <div className="clock__time">{this.state.date.toLocaleTimeString()}</div>
        </div>;
    }
}

export default Clock;