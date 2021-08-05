import React, { Component } from 'react'

class RenderP extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             firstName:""
        }
        this.changeName=this.changeName.bind(this)
    }
    changeName(e){
        this.setState({
            firstName:e.target.value
        })
    }
    render() {
        return (
            <div>
                  {
                      this.props.render(this.firstName,this.changeName)
                  } 
            </div>
        )
    }
}

export default RenderP
