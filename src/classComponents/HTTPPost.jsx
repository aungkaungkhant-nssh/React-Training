import axios from 'axios'
import React, { Component } from 'react'

class HTTPPost extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             id:"",
             title:"",
             body:""
        }
        this.changeHandler=this.changeHandler.bind(this)
    }
    changeDetail(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    changeHandler(e){
        e.preventDefault()
        axios.post("https://jsonplaceholder.typicode.com/posts",this.state)
        .then((response)=>{
            console.log(response.data)
        })
        .catch((error)=>{
            console.log(error.message)
        })
    }
    render() {
        const {id,title,body}=this.state
        return (
            <div>
                <form onSubmit={this.changeHandler}>
                    <input type="text" name="id" value={id} onChange={(e)=>this.changeDetail(e)}/>
                    <input type="text" name="title" value={title} onChange={(e)=>this.changeDetail(e)}/>
                    <input type="text" name="body" value={body} onChange={(e)=>this.changeDetail(e)}/>
                    <input type="submit" value="submit"/>
                </form>             
            </div>
        )
    }
}

export default HTTPPost
