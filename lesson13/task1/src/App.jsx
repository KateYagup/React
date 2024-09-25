
import React from 'react';
import Home from './Home';
import Products from './Products';
import Contacts from './Contacts';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const App = () => {

    return (
        <div className='page'>
            <BrowserRouter>
                <Routes>
                    <Route> <Home /></Route>
                    <Route> <Products /></Route>
                    <Route><Contacts /></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
};

export default App;
