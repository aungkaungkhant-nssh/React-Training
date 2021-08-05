import React, { useContext } from 'react'
import { AgeContext } from '../App';
import CC from './CC'

function CB() {
    const age=useContext(AgeContext);
    return (
        <div>
            {age}
            <CC />
        </div>
    )
}

export default CB
