import React, { Component } from "react";
import Greeting from './Greeting';
import Logout from './Logout';
import Login from './Login';
import Spinner from './Spinner';


class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            processing: false,
            counter: 0,
        }
    }

    startCount() {
        setTimeout(() => {
            this.setState({
                processing: false,
            });
        }, 1000);
    }

    handleLogin = () => {
        this.setState({
            isLoggedIn: true,
            processing: true,
        })
    }

    handleLogout = () => {
        this.setState({
            isLoggedIn: false,
            processing: false,
        })
    }

    render() {
        let spinner;
        let button;
        console.log('this.processing')
        console.log(this.state.processing);
        if (this.state.processing) {
            spinner = <Spinner size="50px" />
            this.startCount();
        } else {
            button = this.state.isLoggedIn
                ? (
                    <Logout onLogout={this.handleLogout} />
                ) : (
                    <Login onLogin={this.handleLogin} />
                )

        }


        return (
            <div className="panel">
                <Greeting isLoggedIn={this.state.isLoggedIn} />
                {spinner}
                <div>
                    {button}
                    {/* {this.state.isLoggedIn  (
                        <Logout onLogout={this.handleLogout} />
                    ) : (
                        <Login onLogin={this.handleLogin} />
                    )} */}
                </div>
            </div>
        )
    }
}

export default Auth;