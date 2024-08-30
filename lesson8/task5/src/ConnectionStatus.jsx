import React, { Component } from 'react';

class ConnectionStatus extends Component {
    state = {
        status: true,
    }

    componentDidMount() {
        window.addEventListener('online', this.doActive);
        window.addEventListener('offline', this.doUnactive);
    }

    componentWillUnmount() {
        window.removeEventListener('online', this.doActive);
        window.removeEventListener('offline', this.doUnactive);
    }

    doActive() {
        this.setState({
            status: 'online'
        })
    }
    doUnactive() {
        this.setState({
            status: 'offline'
        })
    }

    render() {
        const name = 'status status_offline';
        const name1 = 'status';
        return <div className={this.state.status ? name1 : name}>
            {this.state.status ? 'online' : 'offline'}
        </div>;
    }

}

export default ConnectionStatus;