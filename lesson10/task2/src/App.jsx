
import React, { Component } from 'react';
import ShoppingCart from './ShoppingCart';
import Profile from './Profile';


class Page extends Component {
    render() {
        return (
            <div className="page">
                <main className="content">
                    <ShoppingCart />
                    <Profile />
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
