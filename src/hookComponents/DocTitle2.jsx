import React, { useEffect, useState } from 'react'
import CustomHook1 from './CustomHook1'
function DocTitle2() {
    const [timer,setTimer]=useState(0)
    CustomHook1(timer)
    return (
        <div>
            <button onClick={()=>setTimer(timer+1)}>Two</button>
        </div>
    )
}

export default DocTitle2