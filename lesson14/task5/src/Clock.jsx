// put your code here
import React, { useState, useEffect } from "react";
import './clock.scss';
import moment from 'moment';

const getTimeWithOffset = offset => {
    const currentTime = new Date();
    const utcOffset = currentTime.getTimezoneOffset() / 60;
    return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
};


const Clock = ({ location, offset }) => {
    const [newOffset, setOffset] = useState(offset);
    let time = getTimeWithOffset(newOffset);

    useEffect(() => {
        setInterval(() => {
            // console.log(newOffset);
            setOffset(offset);
            time = getTimeWithOffset(newOffset);
        }, 1000);
        console.log(time);
    }, [newOffset]);


    return (
        <>
            <div className="clock">
                <div className="clock__location">{location}</div>
                <div>{newOffset}</div>
                <div className="clock__time">{moment(time).format('LTS')}</div>
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

