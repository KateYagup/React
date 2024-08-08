import React, { Component } from "react";

class ColorPicker extends ColorPicker {


    render() {
        return (
            <div>
                <div class="picker__title">Red</div>
                <div>
                    <button class="picker__button picker__button_coral"></button>
                    <button class="picker__button picker__button_aqua"></button>
                    <button class="picker__button picker__button_bisque"></button>
                </div>
            </div>

        )
    }
}

export default ColorPicker;