import React, { useReducer } from 'react'
const initialState={
    firstCounter:0,
    secondCounter:10
};
const reducer=(state,action)=>{
   switch(action.type){
       case "increaseOne":return {...state,firstCounter:state.firstCounter+1};
       case "increaseFive":return {...state,secondCounter:state.secondCounter+5};
       default :
       return initialState
   }
}
function Reducer2() {
    const [count,dispatch]=useReducer(reducer,initialState);
    return (
        <div>
            <h1>{count.firstCounter}</h1>
            <h1>{count.secondCounter}</h1>
            <button onClick={()=>dispatch({type:'increaseOne'})}>Increase One</button>
            <button onClick={()=>dispatch({type:'increaseFive'})}>Increase One</button>
        </div>
    )
}

export default Reducer2
