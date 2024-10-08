import React, { Component } from "react";

class Dimensions extends Component {
    state = {
        width: null,
        height: null,
    }

    componentDidMount() {
        window.addEventListener('resize', this.onResize);
        const { innerWidth, innerHeight } = window;
        this.setDimension(innerWidth, innerHeight);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.onResize);
    }

    onResize = e => {
        const { innerWidth, innerHeight } = e.target;
        this.setDimension(innerWidth, innerHeight);

    }

    setDimension(width, height) {
        this.setState({
            height,
            width,
        });


        document.title = `${innerWidth}px - ${innerHeight}px`;
    }

    render() {
        return <div className="dimensions">
            {`${this.state.width}px - ${this.state.height}px`}
        </div>;
    }
}

export default Dimensions;