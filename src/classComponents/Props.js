import React from 'react'

function Props(props) {
    const {name,rs,children}=props
    return (
        <div>
            <h1>{name} lover is {rs}</h1>
            {children}
        </div>
    )
}

export default Props
