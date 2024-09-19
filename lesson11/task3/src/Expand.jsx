import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Expand extends Component {

    render() {
        return (
            <div class="expand border">
                <div class="expand__header">
                    <span class="expand__title">{this.props.title}</span>
                    <button class="expand__toggle-btn">
                        {/* <i class="fas fa-chevron-up"></i> */}
                        <div>!!!</div>
                        {/* <FontAwesomeIcon icon="fa-solid fa-arrow-right" /> */}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" /></svg>
                    </button>
                </div>
                <div class="expand__content">
                    {/* <!-- ... expand content (children) --> */}
                    <p>
                        Hooks are a new addition in React 16.8. They let you use state and other React features
                        without writing a class.
                    </p>
                </div>
            </div>
        )
    }

}

export default Expand;