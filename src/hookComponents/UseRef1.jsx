import React, { useRef } from 'react'

function UseRef1() {
    let inputRef=useRef(null);
    const inputFocus=()=>{
        inputRef.current.focus()
    }
    return (
        <div>
            <input type="text" ref={inputRef}/>
            <button onClick={inputFocus}>Focus</button>
        </div>
    )
}

export default UseRef1
