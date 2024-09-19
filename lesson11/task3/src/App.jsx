
import React, { Component } from 'react';
import Expand from './Expand';


class App extends Component {
    state = {
        isVisible: false,
    }

    setVisible = () => {
        this.setState({
            isVisible: !this.state.isVisible,
        })
    }

    render() {
        return (
            <Expand
                title='Some title!!!'
                isVisible={this.state.isVisible}
                setVisible={this.setVisible}
            >
                <p>
                    Hooks are a new addition in React 16.8. They let you use state and other React features
                    without writing a class.
                </p>
            </Expand>
        )
    }
};

export default App;
