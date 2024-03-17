import React, { useState } from "react";
import '../style/Counter.css';

const Counter = () => {

    const [num, setNum] = useState(0);
    const hideLeftArrow = num === 0 ? "hidden" : "";

    const clickUp = () => {
        setNum(num + 1);
    }

    const ClickDown = () => {
        setNum(num - 1);
    }

    return (
        <div className="Counter">
            <i className={`fas fa-minus ${hideLeftArrow}`}
            onClick={ClickDown}></i>
            <h2>{num}</h2>
            <i className={"fas fa-plus"}
            onClick={clickUp}></i>
        </div>
    );
}

export default Counter;