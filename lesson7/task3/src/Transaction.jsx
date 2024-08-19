import moment from "moment/moment";
import React from "react";
// import './moment.js';

const Transaction = ({ id, time, from, to, rate, amount }) => {
    return (
        <div>
            <span className='transaction__date transaction'>{moment(time).format('D MMM')}</span>
            <span className='transaction__time transaction'>{moment(time).format('HH:mm ')}</span>
            <span className='transaction__assets transaction' >{from} → {to}</span>
            <span className='transaction__rate transaction'>{new Intl.NumberFormat('en-GB').format(rate)}</span>
            <span className='transaction__amount transaction' >{new Intl.NumberFormat('en-GB').format(amount)}</span>

        </div>
    )
}

export default Transaction;