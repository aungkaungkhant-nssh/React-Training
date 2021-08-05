import React from 'react'
import { UserContext } from '../App'

function CC() {
    return (
        <div>
          <UserContext.Consumer>
              {
                  username=>{
                      return(
                          <h1>{username}</h1>
                      )
                  }
              }
          </UserContext.Consumer>
        </div>
    )
}

export default CC
