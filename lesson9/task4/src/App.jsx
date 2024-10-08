
import React from 'react';
import UsersList from './UsersList';

const users = [
    {
        id: 'id-0',
        age: 21,
        name: 'Bob',
    },
    {
        id: 'id-1',
        age: 17,
        name: 'Tom',
    },
    {
        id: 'id-2',
        age: 18,
        name: 'Tad',
    },
    {
        id: 'id-3',
        age: 45,
        name: 'Justin',
    },
    {
        id: 'id-4',
        age: 99,
        name: 'Tom',
    },
]


const App = () => {
    return <UsersList users={users} />;
};

export default App;
