import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const rootElement = document.querySelector('#root');

const element = (
    <div>
        <h1>Search Form</h1>
        <div>
            <input type="text" />
            <button>Search</button>
        </div>
    </div>
);

ReactDOM.render(element, rootElement);