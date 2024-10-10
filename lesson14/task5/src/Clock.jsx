// put your code here
import React, { useState, useEffect } from "react";
import './clock.scss';
import moment from 'moment';

const getTimeWithOffset = (currentTime, offset, utcOffset) => {
    // const currentTime = new Date();
    // const utcOffset = currentTime.getTimezoneOffset() / 60;
    return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
};

const utcOffset = new Date().getTimezoneOffset() / 60;
console.log(utcOffset);


const Clock = ({ location, offset }) => {
    const [time, setTime] = useState(new Date());
    let localTime;

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => {
            clearInterval(intervalId);
        }

    }, []);

    new Date(time.setHours(time.getHours() + offset + utcOffset));
    return (

        <>
            <div className="clock">
                <div className="clock__location">{location}</div>
                <div className="clock__time">{moment(time).format('LTS')}</div>
                {/* <div className="clock__time">{moment(localTime).format('LTS')}</div> */}
            </div>
        </>
    )
}

// class Clock extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             offset: this.props.offset,
//         }
//         setInterval(() => {
//             this.setState({
//                 offset: this.state.offset,
//             })
//         }, 1000);
//     }

//     render() {
//         console.log(this.props.offset);
//         // console.log(getTimeWithOffset(this.props.offset));
//         const time = getTimeWithOffset(this.props.offset);
//         // console.log(time.getDay());
//         return (
//             <>
//                 <div className="clock">
//                     <div className="clock__location">{this.props.location}</div>
//                     <div className="clock__time">{moment(time).format('LTS')}</div>
//                 </div>
//             </>
//         )
//     }
// }

export default Clock;

