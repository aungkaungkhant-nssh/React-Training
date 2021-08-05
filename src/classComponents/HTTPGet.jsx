import axios from 'axios'
import React, { Component } from 'react'

export class HTTPGet extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts:[]
        }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response)=>{
            this.setState({
                posts:response.data
            })
            console.log(this.state.posts)
        })
        .catch((err)=>{
            console.log(err.message)
        })
    }
    render() {
       
        return (
            <div>
                    {
                        this.state.posts.length ?
                        this.state.posts.map(post =>  <h1>{post.title}</h1> )
                        :null
                    }
            </div>
        )
    }
}

export default HTTPGet
