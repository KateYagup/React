import React, { Component } from "react";
import './index.scss';



class ColorPicker extends Component {
    constructor() {
        super();
        this.state = {
            color: 'Red',
        }
    }

    setTextColor(text) {
        this.setState({
            color: text,
        })
    }

    setNoText() {
        this.setState({
            color: '',
        })
    }

    render() {


        return (
            <div>
                <div className="picker__title">{this.state.color}</div>
                <div>
                    <button
                        className="picker__button picker__button_coral"
                        onMouseOver={() => this.setTextColor('Coral')}
                        onMouseOut={() => this.setNoText()}>
                    </button>
                    <button
                        className="picker__button picker__button_aqua"
                        onMouseOver={() => this.setTextColor('Aqua')}
                        onMouseOut={() => this.setNoText()}>
                    </button>
                    <button
                        className="picker__button picker__button_bisque"
                        onMouseOver={() => this.setTextColor('Bisque')}
                        onMouseOut={() => this.setNoText()}>
                    </button>
                </div>
            </div>
        )
    }
}

export default ColorPicker;