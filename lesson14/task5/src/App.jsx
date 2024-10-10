import React, { useState } from "react";
import Clock from './Clock.jsx';

const App = (props) => {
    const [visible, setVisible] = useState(true);
    const toggle = () => {
        setVisible(!visible);
        console.log(visible);
    }

    return (
        <>
            <button onClick={toggle}>clear</button>
            <div>{visible && <Clock location='London' offset={0} />}</div>
            <div>{visible && <Clock location='Kyiv' offset={2} />}</div>
            <div>{visible && <Clock location='New York' offset={-5} />}</div>
        </>
    )
}

export default App;