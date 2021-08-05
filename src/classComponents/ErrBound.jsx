import React, { Component } from 'react'

export class ErrBound extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             hasError:false
        }
    }
    static getDerivedStateFromError(error){
        return {hasError:true}
    }
    componentDidCatch(error,errorInfo){
        console.log(error)
    }
    render() {
       if(this.state.hasError){
            return <h1>You are Hacker</h1>
       }
       return this.props.children
    }
}

export default ErrBound

