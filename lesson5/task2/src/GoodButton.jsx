import React from "react";

class GoodButton extends React.Component {
    handleClick(event) {
        console.log(event.target);
        alert('Click me!');
    }
    render() {
        return (
            < button
                className="fancy-button"
                onClick={this.handleClick}>
                Click me!
            </button >
        )
    }
}

export default GoodButton;