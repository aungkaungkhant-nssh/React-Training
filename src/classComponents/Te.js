import React, { Component } from 'react'

export class Te extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             firstName:"",
             lastName:""
        }
       this.handleSubmit=this.handleSubmit.bind(this)
    }
    changeName(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleSubmit(event){
        event.preventDefault()
        alert(this.state.firstName + this.state.lastName)
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="firstName" value={this.state.firstName} onChange={(e)=>this.changeName(e)}></input>
                    <input type="text"  name="lastName" value={this.state.lastName} onChange={(e)=>this.changeName(e)}></input>
                    <input type="submit"></input>
                </form>
                <h1>{this.state.firstName}</h1>
                <h1>{this.state.lastName}</h1>

            </div>
        )
    }
}

export default Te
