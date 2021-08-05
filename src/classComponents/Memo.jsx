import React from 'react'

function Memo() {
    console.log("Memo is render")
    return (
        <div>
            
        </div>
    )
}

export default  React.memo(Memo)
