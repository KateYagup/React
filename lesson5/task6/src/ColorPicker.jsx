import React, { Component } from "react";
import './index.scss';

const RED = 'Red';
const CORAL = 'Coral';
const AQUA = 'Aqua';

class ColorPicker extends Component {
    constructor() {
        super();
        this.state = {
            color: RED,
        }
    }

    setTextColor(e) {
        const colClass = e.target.className.split('_');
        const newColor = String(colClass.slice(-1));
        const result = newColor.charAt(0).toUpperCase() + newColor.slice(1);
        this.setState({
            color: result,
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
                        onMouseOver={(e) => this.setTextColor(e)}
                        onMouseOut={() => this.setNoText()}>
                    </button>
                    <button
                        className="picker__button picker__button_aqua"
                        onMouseOver={(e) => this.setTextColor(e)}
                        onMouseOut={() => this.setNoText()}>
                    </button>
                    <button
                        className="picker__button picker__button_bisque"
                        onMouseOver={(e) => this.setTextColor(e)}
                        onMouseOut={() => this.setNoText()}>
                    </button>
                </div>
            </div>
        )
    }
}

export default ColorPicker;