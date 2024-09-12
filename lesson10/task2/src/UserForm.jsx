import React from "react";

const UserForm = ({ userData, handleChange }) => {
    // handleChange = event => {
    //     this.props.handleChange(event);
    // }
    return (
        <form className="user-form">
            <input
                type="text"
                name="firstName"
                className="user-form__input"
                value={userData.firstName}
                onChange={handleChange}
            // onChange={this.handleChange}
            />
            <input
                type="text"
                name="lastName"
                className="user-form__input"
                value={userData.lastName}
                onChange={handleChange}
            />
        </form>
    );
}

export default UserForm;