import React, { Component } from "react";
import User from './User';

class UsersList extends Component {
    state = {
        filterText: '',
    }

    handleChange = event => {
        console.log(event.target.value);
        this.props.onChange(this.state.filterText);
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
                <input
                    className="filter__input"
                    value={this.state.filterText}
                    onChange={this.handleChange}
                />
                {list}
            </>
        )
    }
}

export default UsersList;