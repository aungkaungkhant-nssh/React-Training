import React, { Component } from 'react'

class CallbackRef extends Component {
    constructor(props) {
        super(props)
        this.inputRef=null;
        this.setInputText=element=>{
            this.inputRef=element;
        }
        this.inputFocus=this.inputFocus.bind(this)
    }
    inputFocus(){
        this.inputRef.focus();
    }
    render() {
        return (
            <div>
                <input type="text" ref={this.setInputText}></input>
                <button onClick={this.inputFocus}>click</button>                
            </div>
        )
    }
}

export default CallbackRef
