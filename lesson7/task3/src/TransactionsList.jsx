import React from "react";
import Transaction from './Transaction';

const TransactionsList = ({ transactions }) => {
    return (
        <ul className="transactions" >
            {transactions.map(transaction =>
                <Transaction key={transaction.id} {...transaction} />
            )}
        </ul>
    )
}

export default TransactionsList;