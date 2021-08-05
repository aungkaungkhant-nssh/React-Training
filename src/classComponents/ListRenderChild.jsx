import React, { Component } from 'react'

class ListRenderChild extends Component {
    render() {
        const {id,name,age}=this.props.person
        return (
            <div>
                {id}
                {name}
                {age}
            </div>
        )
    }
}

export default ListRenderChild
