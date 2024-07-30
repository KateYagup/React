import React from "react";
import moment from 'moment';

const formatDate = date => moment(date).format('DD MMM YYYY');
// const bithDate = formatDate(props.birthDate);
// const todayDate = new Date();
// const todaYear = getYear(todayDate);

const Greeting = (props) => {
    const birthDate = formatDate(props.birthDate);
    const todayDate = new Date();
    // const todaYear = getYear(todayDate);
    // console.log(birthDate.getFullYear());
    console.log(props.birthDate.getFullYear());
    console.log(props.birthDate.getMonth());
    const age = todayDate.getMonth() - props.birthDate.getMonth() < 0
        ? todayDate.getFullYear() - props.birthDate.getFullYear() - 1
        : todayDate.getFullYear() - props.birthDate.getFullYear();
    console.log(age);
    return (
        <div className="greeting">
            {`My name is ${props.firstName} ${props.lastName}. I am ${age} years old`}
        </div>
    )
}

export default Greeting;