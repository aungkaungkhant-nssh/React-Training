import React, { useState } from 'react'

function CustomHook2() {
    const [count,setCount]=useState(0)
    const increaseCount=()=>{
        setCount(prevCount=>prevCount+1)
    }
    const decreaseCount=()=>{
        setCount(prevCount=>prevCount-1)
    }
    const resetCount=()=>{
        setCount(0)
    }
    return [count,increaseCount,decreaseCount,resetCount]
}

export default CustomHook2
