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
        // console.log('filterText');
        // console.log(this.state.filterText);
        const usersList = this.props.users;
        let list;
        if (this.state.filterText === '') {
            list = usersList.map(user => (
                <User className='users' key={user.id} {...user} />
            ))
        } else {
            list = usersList
                .filter(elem => elem.name === this.state.filterText)
                .map(user => (
                    <User className='user' key={user.id} {...user} />
                ))
        }

        const count = list.length;
        console.log(count);

        return (
            <>
                <Filter
                    count={count}
                    onChange={this.handleChange}
                    filterText={this.state.filterText}
                />
                <ul className="users">
                    {list}
                </ul>

            </>
        )
    }
}

export default UsersList;