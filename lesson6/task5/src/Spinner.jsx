import React from "react";

const Spinner = ({ size }) => {
    console.log(size);
    const visible = "display: 'none'";
    return (
        <div className="spinner" style={{ width: '50px', height: '50px' }} >
        </div >
    )
}
export default Spinner;