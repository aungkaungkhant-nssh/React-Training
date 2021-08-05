import React, { useEffect, useState } from 'react'

function ConditionUseEffectHook() {
    const [count,setCount]=useState(0);
    const [name,setName]=useState("");
    useEffect(()=>{
        console.log("Component is render")
    },[count])
    return (
        <div>
            {count}
            <button onClick={()=>setCount(prevCount=>prevCount+1)}>click</button>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
        </div>
    )
}

export default ConditionUseEffectHook
