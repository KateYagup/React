import moment from "moment/moment";
import React from "react";
// import './moment.js';

const formatter = new Intl.NumberFormat('en-GB');

const Transaction = ({ id, time, from, to, rate, amount }) => {
    return (
        <div>
            <span className='transaction__date transaction'>{moment(time).format('DD MMM')}</span>
            <span className='transaction__time transaction'>{moment(time).format('HH:mm ')}</span>
            <span className='transaction__assets transaction' >{from} → {to}</span>
            <span className='transaction__rate transaction'>{formatter.format(rate)}</span>
            <span className='transaction__amount transaction' >{formatter.format(amount)}</span>

        </div>
    )
}

export default Transaction;