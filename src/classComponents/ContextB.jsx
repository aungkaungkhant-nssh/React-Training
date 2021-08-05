import React, { Component } from 'react'
import Context from './Context'
import ContextC from './ContextC'

class ContextB extends Component {
    static contextType=Context;
    render() {
        return (
            <div>
                {this.context.age}
                <ContextC />
            </div>
        )
    }
}

export default ContextB
