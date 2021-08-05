import React, { useState } from 'react'

function HookWithArray() {
    const [items,setItems]=useState([]);
    const addItem=()=>{
        setItems([...items,{id:items.length,value:Math.floor(Math.random()*10)+1}])
    }
    return (
        <div>
            <button onClick={addItem}>Add Item</button>
            <ul>
                {
                    items.map(i =><li key={i.id}>{i.value}</li>)
                }
            </ul>
           
        </div>
    )
}

export default HookWithArray



