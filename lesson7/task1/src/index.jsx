import React from "react";
import ReactDOM from 'react-dom';
import NumbersList from "./NumbersList";
import './index.scss';

const numbers = [1, 2, 3, 4, 5];
const numberElems = numbers.map(num => <li>{num}</li>);

const element = <ul>{numberElems}</ul>;

const rootElem = document.querySelector('#root');
ReactDOM.render(element, rootElem);

