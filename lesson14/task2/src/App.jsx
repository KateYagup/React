
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import User from './User';

const App = () => {
    return (
        <div className="page">
            <Router>
                <div className="page__content">
                    <h1>Users</h1>
                    <ul className="navigation">
                        <li className="navigation__item">
                            <Link to="/users/github" >GitHub</Link>
                            {/* <a href="/users/github">Github</a> */}
                        </li>
                        <li className="navigation__item">
                            <Link to="/users/facebook" >Facebook</Link>
                            {/* <a href="/users/facebook">Facebook</a> */}
                        </li>
                    </ul>
                    <Switch>
                        <Route path="/users/:userId" >
                            <User />
                        </Route>
                        <Route path="/">
                            <span>Select a user please</span>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    )
};

export default App;
