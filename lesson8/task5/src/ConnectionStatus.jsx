import React, { Component } from 'react';

class ConnectionStatus extends Component {
    state = {
        status: 'offline',
    }

    componentDidMount() {
        // window.addEventListener('online', this.doActive);
        window.addEventListener('offline', console.log('oline'));
    }

    // doActive() {
    //     setState
    // }

    render() {
        const showState = <div className="status status_offline">Offline</div>
        // showState.classList.add()
        console.log(this.state.status);
        return showState;
    }

}

export default ConnectionStatus;