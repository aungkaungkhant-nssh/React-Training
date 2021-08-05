import React, { useState } from 'react'
import CustomHook2 from './CustomHook2'
function Counter2() {
    const [count,increaseCount,decreaseCount,resetCount]=CustomHook2();
    
    return (
        <div>
              <h1>{count}</h1>
            <button onClick={increaseCount}>Increase</button>
            <button onClick={decreaseCount}>Decrease</button>
            <button onClick={resetCount}>reset</button>
        </div>
    )
}

export default Counter2
