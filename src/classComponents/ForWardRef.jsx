import React, { Component } from 'react'
import ForWardRefParent from './ForWardRefParent'

class ForWardRef extends Component {
    constructor(props) {
        super(props)
        this.inputRef=React.createRef();
    }
    focusRef(){
        this.inputRef.current.focus();
    }
    render() {
        return (
            <div>
                   <ForWardRefParent ref={this.inputRef}/>
                   <button onClick={()=>this.focusRef()}>Focus Ref</button>                 
            </div>
        )
    }
}

export default ForWardRef
