import React, { useReducer } from 'react'
const initialState={
    firstCounter:0,
    secondCounter:0
}
const reducer=(state,action)=>{
    switch(action){
        case "increaseOne":return {...state,firstCounter:state.firstCounter+1}
        case "increaseFive":return {...state,secondCounter:state.secondCounter+5}
    }
}
function MutipleReducre() {
    const [count,dispatch]=useReducer(reducer,initialState)
    return (
        <div>
            <h1>{count.firstCounter}</h1>
            <h1>{count.secondCounter}</h1>
            <button onClick={()=>dispatch("increaseOne")}>Increase One</button>
            <button onClick={()=>dispatch("increaseFive")}>Increase Five</button>
        </div>
    )
}

export default MutipleReducre
