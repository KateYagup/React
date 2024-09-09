// import React, { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./styles.css";

// import App from "./App";

import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App.jsx';
import Game from './Game';


const rootElement = document.querySelector('#root');

ReactDOM.render(<Game />, rootElement);


// const root = createRoot(document.getElementById("root"));
// root.render(
//     <StrictMode>
//         <App />
//     </StrictMode>
// );