import React, { useState, useEffect } from "react";

const Dimensions = () => {
    const [dimensions, setDimensions] = useState({
        width: null,
        height: null,
    });


    useEffect = (() => {
        const { innerHeight, innerWidth } = window;
        setDimensions({ width: innerWidth, height: innerHeight });
        const handleResize = e => {
            const { innderWidth, innerHeight } = e.target;
            setDimensions({ width: innderWidth, height: innerHeight });
        }
        window.addEventListener('resize', handleResize);
    }, []);

    const { width, height } = dimensions;


    return <div className="dimensions">{`${width}px - ${height}px`}</div>;

}

export default Dimensions;