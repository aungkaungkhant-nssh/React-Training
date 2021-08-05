import React, { Component } from 'react'

export class EventHandlerClass extends Component {
    alertBox(){
        alert(12);
    }
    render() {
        return (
            <div>
                <button onClick={this.alertBox}>click</button>
            </div>
        )
    }
}

export default EventHandlerClass
