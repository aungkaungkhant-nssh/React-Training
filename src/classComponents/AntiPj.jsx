import React, { Component } from 'react'

class AntiPj extends Component {
    render() {
        const {id,createdAt}=this.props.list;
      
        return (
            
          <React.Fragment>
                  <tr>
                      <td>{this.props.index}</td>
                      <td>{id}</td>
                      <td>{createdAt.toLocaleTimeString()}</td>
                  </tr>
             
          </React.Fragment>
        )
    }
}

export default AntiPj
