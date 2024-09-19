import React, { Component } from "react";

class Expand extends Component {
    state = {
        isVisible: false,
    }

    setVisible = () => {
        this.setState({
            isVisible: !this.state.isVisible,
        })
    }

    render() {
        return (
            <div className="expand border">
                <div className="expand__header">
                    <span className="expand__title">{this.props.title}</span>
                    <button
                        className="expand__toggle-btn"
                        onClick={this.setVisible}
                    >
                        {this.state.isVisible && <i className="fas fa-chevron-up"></i>}
                        {!this.state.isVisible && <i className="fas fa-chevron-down"></i>}
                    </button>
                </div>
                {this.state.isVisible &&
                    <div className="expand__content">
                        {this.props.children}
                    </div>
                }
            </div>
        )
    }
}

export default Expand;