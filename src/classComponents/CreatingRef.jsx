import React, { Component } from 'react'

class CreatingRef extends Component {
    constructor(props) {
        super(props)
        this.inputRef=React.createRef();
        this.focusRef=this.focusRef.bind(this)
    }
    focusRef(){
        this.inputRef.current.focus()
    }
    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef}></input>
                <button onClick={this.focusRef}>click</button>
            </div>
        )
    }
}

export default CreatingRef
