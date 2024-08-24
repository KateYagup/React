import React, { Component } from 'react';

class Clock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date(),
            utcOffset: new Date().getTimezoneOffset() / 60,
            currTime: new Date(new Date().setHours(new Date().getHours() + this.props.offset + this.utcOffset)),
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({
                date: new Date(),
            })
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    getTimeWithOffset(currentTime, offset, utcOffset) {
        return currentTime;
    };

    render() {
        console.log(this.props.currTime);
        console.log(this.state.date);
        return <div>
            {this.props.location}
            {this.state.currTime.toLocaleTimeString()}
        </div>;
    }
}

export default Clock;