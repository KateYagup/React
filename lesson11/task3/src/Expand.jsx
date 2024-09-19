import React, { Component } from "react";

const Expand = ({ children, title, isVisible, setVisible }) => {

    return (
        <div class="expand border">
            <div class="expand__header">
                <span class="expand__title">{title}</span>
                <button
                    class="expand__toggle-btn"
                    onClick={setVisible}
                >
                    {isVisible && <i class="fas fa-chevron-up"></i>}
                    {!isVisible && <i class="fas fa-chevron-down"></i>}
                </button>
            </div>
            {isVisible &&
                <div class="expand__content">
                    {children}
                </div>
            }
        </div>
    )
}

export default Expand;