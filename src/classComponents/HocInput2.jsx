import React, { Component } from 'react'
import Hoc from './Hoc'
class HocInput2 extends Component {
   
    render() {
        const {count,increase}=this.props
        return (
            <div>
                {count}
                <button onClick={increase}>B2</button>
                              
            </div>
        )
    }
}

export default Hoc(HocInput2)
