import React, { useState } from 'react'

function HookWithObj() {
    const [name,setName]=useState({"firstName":'',"lastName":''})
    return (
        <div>
            <input type="text" value={name.firstName} onChange={(e)=>setName({...name,"firstName":e.target.value})}/>
            <input type="text" value={name.lastName} onChange={(e)=>setName({...name,"lastName":e.target.value})}/>
            <h1>{name.firstName}</h1>
            <h1>{name.lastName}</h1>
        </div>
    )
}

export default HookWithObj
