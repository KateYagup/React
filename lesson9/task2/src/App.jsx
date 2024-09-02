
import React from 'react';
import UserForm from './UserForm';

const App = () => {

    createUser = () => {
        console.log('!!!');
    }
    return <UserForm onSubmit={createUser} />;
};

export default App;
