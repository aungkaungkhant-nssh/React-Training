import React, { Component } from 'react'

class ErrBoundParent extends Component {
    render() {
        const {name}=this.props
        if(name==="akk"){
            throw new Error("This Person is a Hacker");
        }
        return (
            <div>
                {name}
            </div>
        )
    }
}

export default ErrBoundParent

