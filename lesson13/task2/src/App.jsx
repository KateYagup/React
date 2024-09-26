
import React from 'react';
import Home from './Home';
import Products from './Products';
import { Link } from 'react-router-dom';

const App = () => {
    return (
        <div className="page">
            <ul className="navigation">
                <li className="navigation__item">
                    <Link to="/">Home</Link>
                </li>
                <li className="navigation__item">
                    <Link to="/products">Products</Link>
                </li>
            </ul>
            <Home />
            <Products />
        </div>
    )
};

export default App;
