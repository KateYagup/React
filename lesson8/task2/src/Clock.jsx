import React, { Component } from 'react';

class Clock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // date: new Date(),
            date: this.getTimeWithOffset(7),
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
        console.log(offset);
        const currentTime = new Date();

        const utcOffset = currentTime.getTimezoneOffset() / 60;
        console.log(utcOffset);
        const result = new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
        console.log(result);
        return result;
    };

    render() {
        // const time = getTimeWithOffset(this.props.offset);
        // console.log(this.props.currTime);
        // console.log(this.state.date);
        return <div>
            {this.props.location}
            {this.state.date.toLocaleTimeString()}
            {/* {moment(this.date).format('LTS')} */}
        </div>;
    }
}

export default Clock;