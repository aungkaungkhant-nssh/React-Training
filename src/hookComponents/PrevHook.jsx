import React, { useState } from 'react'

function PrevHook() {
    const [count,setCount]=useState(0);
    const increaseFive=()=>{
        setCount(prevCount =>{
             return prevCount+5
            
        })
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={()=>setCount(count+1)}>increase One</button>
            <button onClick={increaseFive}>increase Five</button>
        </div>
    )
}

export default PrevHook
