import React, { useState,useEffect, useRef } from 'react'

function UseRef2() {
    const [timer,setTimer]=useState(0);
    const interval=useRef(null);
    useEffect(() => {
         interval.current=setInterval(() => {
            setTimer(prevTimer =>prevTimer+1)
        }, 1000);
       
        return () => {
            clearInterval(interval.current)
        };
    }, [timer]);
    return (
        <div>
            <h1>Your Timer {timer}</h1>   
             <button onClick={()=>clearInterval(interval.current)}>shop</button>     
        </div>
    )
}

export default UseRef2
