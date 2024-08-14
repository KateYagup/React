import React from "react";

const Spinner = ({ size, visible }) => {
    console.log('visible =');
    const style = {
        width: size,
        height: size
    }
    const s = false;
    console.log(size);
    // const visible = "display: 'none'";
    if (visible) {
        return (<>
            <span> {17}</span>
            <div className="spinner" style={style} >

            </div >
        </>

        )
    } else {
        return (
            <div>!!!</div>
        )
    }
}
export default Spinner;