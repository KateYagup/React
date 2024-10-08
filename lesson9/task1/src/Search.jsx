import React, { Component } from 'react';


class Search extends Component {
    state = { value: 'good restaurant' }

    handleChange = event => {
        this.setState({ value: event.target.value })
    }

    search = event => {
        event.preventDefault();
        // console.log(this.state.value);
        alert(`Search text: ${this.state.value}`);
    }
    render() {
        return (
            <form className="search" onSubmit={this.search}>
                <input
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.value}
                    className="search__input"
                />
                <button className="search__button" type='submit'>
                    Search
                </button>
            </form>
        )
    }
}

export default Search;