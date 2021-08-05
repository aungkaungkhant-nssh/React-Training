import React, { Component } from 'react'
import Hoc from './Hoc'

class HocInput1 extends Component {
    
    render() {
        const {name,count,increase}=this.props
        return (
            <div>
                {count}
                <button onClick={increase}>B1</button>  
                {name}              
            </div>
        )
    }
}

export default  Hoc(HocInput1)
