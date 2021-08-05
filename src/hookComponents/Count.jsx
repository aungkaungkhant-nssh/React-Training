import React from 'react'

function Count({text,count}) {
    console.log(`***Count ${text}***`)
    return (
        <div>
            <h1>{count}</h1>
        </div>
    )
}

export default  React.memo(Count)
