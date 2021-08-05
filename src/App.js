import React, { useReducer } from "react";
import './App.css'
import CustomHook3UseInput from "./hookComponents/CustomHook3UseInput";



// export  const UserContext=React.createContext();
// export  const AgeContext=React.createContext();

// const initialState=0;
// const reducer=(state,action)=>{
//       switch(action){
//         case "increase":return state+1;
//         case "decrease":return state-1;
//         case 'reset':return initialState;
//       }
// }
export const UserContext=React.createContext();
function App() {
  // const [count,dispatch]=useReducer(reducer,initialState);
  return (
    <div className="App">
       {/* <UserContext.Provider value={{countState:count,countDipatch:dispatch}}>
            <UserReducerWithUserContext />
      </UserContext.Provider>    */}
      <CustomHook3UseInput />
    </div>
  );
}

export default App;
