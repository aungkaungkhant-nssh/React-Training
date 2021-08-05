import React, { Component } from 'react'

export class MethodPropChild extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.greetHandler}>click</button>
            </div>
        )
    }
}

export default MethodPropChild
