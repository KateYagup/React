import React from "react";
import Clock from './Clock.jsx';

const App = (props) => {
    return (
        <>
            <Clock location='London' offset={0} />
            <Clock location='Kyiv' offset={2} />
            <Clock location='New York' offset={-5} />
        </>
    )
}

export default App;