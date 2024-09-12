
import React, { Component } from 'react';
import ShoppingCart from './ShoppingCart';
import Profile from './Profile';


class Page extends Component {
    state = {
        userData: {
            firstName: 'Tom',
            lastName: 'Form',
        }
    }
    handleChange = event => {
        const { name, value } = event.target;
        // console.log(name);
        // console.log(value);
        // console.log(this.state.userData);

        this.setState({
            userData: {
                ...this.state.userData,
                [name]: value,
            }
        })
    }
    render() {
        const { userData } = this.state;
        return (
            <div className="page">
                <h1 className="title">{`Hello, ${userData.firstName} ${userData.lastName}`}</h1>
                <main className="content">
                    <ShoppingCart userData={userData} />
                    <Profile userData={userData} handleChange={this.handleChange} />
                </main>
            </div >
        )
    }
}

export default Page;
// const App = () => {
//     return <div>Hello, React!</div>;
// };

// export default App;
