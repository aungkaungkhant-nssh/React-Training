import React, { Component } from 'react'
import { UserConsumer } from './Context'

class ContextC extends Component {
    render() {
        return (
            <div>
                <UserConsumer>
                   {
                        username=>{
                            return(
                                <h1>{username.name}</h1>
                            )
                        }
                    }
                </UserConsumer>
            </div>
        )
    }
}

export default ContextC
