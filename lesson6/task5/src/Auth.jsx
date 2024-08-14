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
            isSpinner: true,
            counter: 0,
        }
        // setInterval(() => {
        //     this.setState({
        //         counter: this.state.counter + 1,
        //     });
        // }, 1000);
    }

    startCount() {
        setInterval(() => {
            this.setState({
                counter: this.state.counter + 1,
            });
        }, 1000);
        console.log(this.state.counter);
    }


    handleLogin = () => {
        this.setState({
            isLoggedIn: true,
            isSpinner: true,

        })
    }

    handleLogout = () => {
        this.setState({
            isLoggedIn: false,
            isSpinner: false,
        })

    }

    render() {
        const s = false;
        let spinner;
        if (s)
            spinner = <Spinner size="50px" visible={this.state.isSpinner} />

        return (
            <div className="panel">

                {spinner}
                <Greeting isLoggedIn={this.state.isLoggedIn} />
                <div>


                    {this.state.isLoggedIn ? (
                        <Logout onLogout={this.handleLogout} />
                    ) : (
                        <Login onLogin={this.handleLogin} />
                    )}
                </div>

            </div>
        )
    }
}

export default Auth;