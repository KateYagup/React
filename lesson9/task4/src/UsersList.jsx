import React, { Component } from "react";
import User from './User';
import Filter from './Filter';

class UsersList extends Component {
    state = {
        filterText: '',
    }

    handleChange = event => {
        console.log('event.target.value');
        console.log(event.target.value);
        // this.props.onChange(this.state.handleChange);
        this.setState({
            filterText: event.target.value,
        })
    }

    render() {
        const usersList = this.props.users;
        let usersToDisplay;
        if (this.state.filterText === '') {
            usersToDisplay = usersList
        } else {
            usersToDisplay = usersList
                .filter(elem => elem.name === this.state.filterText)
        }

        const count = usersToDisplay.length;

        return (
            <>
                <Filter
                    count={count}
                    onChange={this.handleChange}
                    filterText={this.state.filterText}
                />
                <ul className="users">
                    {usersToDisplay.map(user => (
                        <User className='user' key={user.id} {...user} />
                    ))}
                </ul>
            </>
        )
    }
}

export default UsersList;