
import React from 'react';
import UserForm from './UserForm';

const App = () => {

    const createUser = FormData => {
        console.log(FormData);
    }

    return <UserForm onSubmit={createUser} />;
};

export default App;
