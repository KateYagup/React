import React, { Component, useState, useEffect } from 'react';

const ConnectionStatus = () => {
    const [status, setStatus] = useState('online');

    useEffect(() => {
        window.addEventListener('online', doActive);
        window.addEventListener('offline', doUnactive);

        doActive = () => {
            setStatus('online')
        }
        doUnactive = () => {
            setStatus(false)
        }
        return () => {
            window.removeEventListener('online', doActive);
            window.removeEventListener('offline', doUnactive);
        }
    }, [status]);


    return <div className={status === 'online' ? 'status' : 'status status_offline'}>
        {status === 'online' ? 'online' : 'offline'}
    </div>;
}




// class ConnectionStatus extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             status: 'online',
//         }
//     }

//     componentDidMount() {
//         window.addEventListener('online', this.doActive);
//         window.addEventListener('offline', this.doUnactive);
//     }

//     componentWillUnmount() {
//         window.removeEventListener('online', this.doActive);
//         window.removeEventListener('offline', this.doUnactive);
//     }

//     doActive = () => {
//         this.setState({
//             status: 'online'
//         })
//     }
//     doUnactive = () => {
//         this.setState({
//             status: false
//         })
//     }

//     render() {
//         return <div className={this.state.status === 'online' ? 'status' : 'status status_offline'}>
//             {this.state.status === 'online' ? 'online' : 'offline'}
//         </div>;
//     }

// }

export default ConnectionStatus;