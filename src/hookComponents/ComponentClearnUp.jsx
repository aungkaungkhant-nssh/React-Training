import React, { useEffect, useState } from 'react'

function ComponentClearnUp() {
    const [x,setX]=useState(0);
    const [y,setY]=useState(0);
    const logMousePostion=(e)=>{
        console.log("mouse is moving")
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(()=>{
        console.log("UseEffect Called");
        window.addEventListener("mousemove",logMousePostion);
        return()=>{
            window.removeEventListener("mousemove",logMousePostion)
        }
    },[])
    return (
        <div>
            <h1>{x}</h1>
            <h1>{y}</h1>
        </div>
    )
}

export default ComponentClearnUp
