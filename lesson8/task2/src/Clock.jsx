import React, { Component } from 'react';

class Clock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date(),
            // utcOffset: new Date().getTimezoneOffset() / 60,
            // currTime: new Date(new Date().setHours(new Date().getHours() + this.props.offset + this.utcOffset)),
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

    getTimeWithOffset(offset) {
        const currentTime = new Date();
        const utcOffset = currentTime.getTimezoneOffset() / 60;
        return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
    };

    render() {
        const time = getTimeWithOffset(this.props.offset);
        console.log(this.props.currTime);
        console.log(this.state.date);
        return <div>
            {this.props.location}
            {moment(time).format('LTS')}
        </div>;
    }
}

export default Clock;