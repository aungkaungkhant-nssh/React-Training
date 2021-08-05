import React from 'react'

const ForWardRefParent=React.forwardRef((props,ref)=>{
    return(
        <div>
            <input type="text"  ref={ref}/>
        </div>
    )
})

export default ForWardRefParent
