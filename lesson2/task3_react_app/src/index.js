import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const renderSeconds = time => {
  const seconds = new Date(time).getSeconds();
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
  )
}


root.render(

);

// const rootElement = document.querySelector('#root');
// const element = (
//   <div className='seconds'>
//     {17}
//   </div >
// );
// ReactDOM.render(element, rootElement);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
