import React, { Component } from 'react'

export class From extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             person:{
                 firstName:"",
                 lastName:""
             }
        }
      
    }
    changeName(e){
        this.setState({
            person:{
                ...this.state.person,
                [e.target.name]:e.target.value
            }
        })
    }
    handleSubmit(event){
        event.preventDefault()
        alert(`Hello ${this.state.person.firstName}  ${this.state.person.lastName}`)
    }
    render() {
        return (
            <div>
                <form onSubmit={(event)=>this.handleSubmit(event)}>
                    <input type="text" name="firstName" value={this.state.person.firstName} onChange={(e)=>this.changeName(e)}></input>
                    <input type="text" name="lastName" value={this.state.person.lastName} onChange={(e)=>this.changeName(e)}></input>
                    <input type="submit" />
                </form>
             <h1>{this.state.person.firstName}</h1>
             <h1>{this.state.person.lastName}</h1>
            </div>
        )
    }
}

export default From

