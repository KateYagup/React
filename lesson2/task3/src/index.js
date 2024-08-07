import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const rootElement = document.querySelector('#root');

const renderSeconds = time => {
    const seconds = new Date().getSeconds();
    const backgroundColor = seconds % 2 === 0
        ? '#fff'
        : '#000';

    const textColor = seconds % 2 === 0
        ? '#000'
        : '#fff';

    const styles = {
        color: textColor,
        backgroundColor
    }

    const element = (
        <div
            className='seconds'
            style={styles}
        >
            {seconds}
        </div >
    );

    ReactDOM.render(element, rootElement);
}

renderSeconds(new Date());
setInterval(() => renderSeconds(new Date()), 1000);