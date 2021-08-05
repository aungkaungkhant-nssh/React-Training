import React, { useState } from 'react'
import CustomHook3 from './CustomHook3';

function CustomHook3UseInput() {
    const [firstValue,firstBind,firstReset]=CustomHook3('');
    const [secondValue,secondBind,secondReset]=CustomHook3('');
    const handleSubmit=(e)=>{
        e.preventDefault()
        alert(firstValue+secondValue)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" {...firstBind}/>
                <input type="text" {...secondBind}/>
                <input type="submit" />
                
            </form>
        </div>
    )
}

export default CustomHook3UseInput
