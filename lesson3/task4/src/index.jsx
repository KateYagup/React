import React from "react";
import ReactDOM from 'react-dom';
import Greeting from './Greeting';
import './index.scss';

const root = document.querySelector('#root');

ReactDOM.render(
    <Greeting
        firstName='John'
        lastName='Doe'
        birthDate={new Date(1975, 7, 23)}
    />,
    root
);