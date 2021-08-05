import React, { Component } from 'react'
import ContextB from './ContextB'

class ContextA extends Component {
    render() {
        return (
            <div>
                
                <ContextB />
            </div>
        )
    }
}

export default ContextA
