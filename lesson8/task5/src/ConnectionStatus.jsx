import React, { Component } from 'react';

class ConnectionStatus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: 'online',
        }
    }

    componentDidMount() {
        window.addEventListener('online', this.doActive);
        window.addEventListener('offline', this.doUnactive);
    }

    componentWillUnmount() {
        window.removeEventListener('online', this.doActive);
        window.removeEventListener('offline', this.doUnactive);
    }

    doActive = () => {
        this.setState({
            status: 'online'
        })
    }
    doUnactive = () => {
        this.setState({
            status: false
        })
    }

    render() {
        return <div className={this.state.status === 'online' ? 'status' : 'status status_offline'}>
            {this.state.status === 'online' ? 'online' : 'offline'}
        </div>;
    }

}

export default ConnectionStatus;