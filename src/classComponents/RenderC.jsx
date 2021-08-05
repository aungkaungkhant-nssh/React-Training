import React, { Component } from 'react'

class RenderC extends Component {
    render() {
        const {name,changeName}=this.props;
        return (
            <div>
                    <input type="text" value={name} onChange={changeName}/>                   
            </div>
        )
    }
}

export default RenderC
