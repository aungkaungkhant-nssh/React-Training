import axios from 'axios';
import React, { useEffect, useState } from 'react'

function FetchData() {
    const [post,setPosts]=useState({});
    const [id,setId]=useState(1);
    const [buttonId,setButtonId]=useState(1)
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${buttonId}`)
        .then((res)=>{
            setPosts(res.data)
            console.log(res.data)
        })
        .catch((err)=>{
            console.log(err.message)
        })
    },[buttonId])
    return (
        <div>
            <h1>{post.title}</h1>
            <input type="text" value={id} onChange={e=>setId(e.target.value)}/>
            <button onClick={()=>setButtonId(id)}>click</button>
        </div>
    )
}

export default FetchData

