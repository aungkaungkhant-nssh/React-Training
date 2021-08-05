import React, { useContext } from 'react'
import { UserContext } from '../App'

function UserReducerWithUserContext() {
    const count=useContext(UserContext);
    return (
        <div>
            {count.countState}
            <button onClick={()=>count.countDipatch('increase')}>increase</button>
            <button onClick={()=>count.countDipatch('decrease')}>decrease</button>
            <button onClick={()=>count.countDipatch('reset')}>reset</button>
        </div>
    )
}

export default UserReducerWithUserContext
