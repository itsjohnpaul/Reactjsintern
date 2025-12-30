import React from 'react'
import "./styles/counter.css";
import { useState } from 'react';
export default function Counter() {

    const [count, setCount] = useState(0);
    const [toggle, setToggle] = useState(true);
    return (
        <>
             <center><h2>
                Counter App</h2></center>
            <div className="co">
                <div className="butns">
                    <button className="inc" onClick={() => { setCount(count + 1) }}>+</button>
                 <button  className="tog" onClick={() => { setToggle(!toggle) }}>Toggle</button>
                    <button className="dec" onClick={() => { setCount(count - 1) }}>-</button>
                </div>
                <div className="cont">
                    {toggle && <p>{count}</p>}
                </div>
                <button className="clear" onClick={() => { setCount(0) }}>Clear</button>
            </div>

        </>
    )
}
