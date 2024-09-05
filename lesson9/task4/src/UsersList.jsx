import React, { Component } from "react";
import User from './User';
import Filter from './Filter';

class UsersList extends Component {
    state = {
        filterText: '',
    }

    handleChange = event => {
        event.persist();
        console.log('event.target.value');
        console.log(event.target.value);
        this.props.onChange(this.state.handleChange);
        this.setState({
            filterText: event.target.value,
        })
    }

    render() {
        const usersList = this.props.users;
        console.log(usersList);
        const list = usersList.map(user => (
            <User className='users' key={user.id} {...user} />
        ))
        return (
            <>
                <Filter
                    onChange={this.handleChange}
                    filterText={this.filterText}
                />
                {list}
            </>
        )
    }
}

export default UsersList;