import React, { useEffect } from 'react'

function CustomHook1(timer) {
    useEffect(()=>{
        document.title=`You Time is ${timer}`
    },[timer])
    return (
        <div>
            
        </div>
    )
}

export default CustomHook1
