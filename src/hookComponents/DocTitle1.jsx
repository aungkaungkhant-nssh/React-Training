import React, { useEffect, useState } from 'react'
import CustomHook1 from './CustomHook1'

function DocTitle1() {
    const [timer,setTimer]=useState(0)
    CustomHook1(timer)
    return (
        <div>
            <button onClick={()=>setTimer(timer+1)}>One</button>
        </div>
    )
}

export default DocTitle1
