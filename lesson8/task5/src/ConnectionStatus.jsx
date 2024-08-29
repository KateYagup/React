import React, { Component } from 'react';

class ConnectionStatus extends Component {
    state = {
        status: 'online',
    }

    componentDidMount() {
        window.addEventListener('online', this.doActive);
        window.addEventListener('offline', this.doUnactive);
    }

    doActive() {
        setState({
            status: 'online'
        })
    }
    doUnactive() {
        setState({
            status: 'offline'
        })
    }

    render() {
        const name = 'status status_offline';
        const name1 = 'status';
        return <div className={this.state.status == 'offline' ? name : name1}>
            {this.state.status == 'offline' ? 'offline' : 'online'}
        </div>;
    }

}

export default ConnectionStatus;