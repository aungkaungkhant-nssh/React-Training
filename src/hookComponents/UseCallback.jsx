import React, { useCallback, useState } from 'react'
import Button from './Button';
import Count from './Count'
import Title from './Title'

function UseCallback() {
    const [age,setAge]=useState(19);
    const [sallary,setSallary]=useState(500000) 
    const incrementAge=useCallback(()=>{
        setAge(age+1);
    },[age])
    const incrementSallary=useCallback(()=>{
        setSallary(sallary+100000);
    },[sallary])
    return (
        <div>
            <Title />
            <Count text="age" count={age}/>
            <Button handleClick={incrementAge}>Increase Age</Button>
            <Count text="sallary" count={sallary} />
            <Button handleClick={incrementSallary}>Increase Sallary</Button>
        </div>
    )
}

export default UseCallback
