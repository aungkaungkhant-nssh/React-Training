import React, { Component } from 'react'
import RefWithClass from './RefWithClass'

class RefWithClassParent extends Component {
    constructor(props) {
        super(props)
        this.inputRef=React.createRef();
        
    }
    clickHandler(){
        this.inputRef.current.inputFocus();
    }
    render() {
        return (
            <div>
                <RefWithClass ref={this.inputRef}/>
                <button onClick={()=>this.clickHandler()}>focus</button>                
            </div>
        )
    }
}

export default RefWithClassParent
