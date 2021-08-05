import React, { Component } from 'react'

class State extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    changeNumber(){
        this.setState(prevState =>{
            return {count:prevState.count+1}
        })
    }
    // changeNumber(){
    //     this.setState({
    //         count:this.state.count+1
    //     },()=>{
    //         console.log(this.state.count)
    //     })
    // }
    increaseFive(){
        this.changeNumber()
        this.changeNumber()
        this.changeNumber()
        this.changeNumber()
        this.changeNumber()
    }
    render() {
        return (
            <div>
                  <h1>{this.state.count}</h1>
                  <button onClick={()=>this.changeNumber()}>click</button> 
                  <button onClick={()=>this.increaseFive()}>Increase Five</button>             
            </div>
        )
    }
}

export default State

