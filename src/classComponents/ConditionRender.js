import React, { Component } from 'react'

class ConditionRender extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn:false
        }
    }
    
    render() {
        return(
            <div>
                {this.state.isLoggedIn&&"aungkaungkhant"}
            </div>
        )
        // <h1>{this.state.isLoggedIn?"aungkaungkhant":"nansusanhtike"}</h1>
    //     let name;
    //   if(this.state.isLoggedIn){
    //           name="Aung Kaung Khant";
          
    //   }else{
    //     name="nansusanhtike"
    //   }
    //   return (
    //       <h1>{name}</h1>
    //   )


    }
}

export default ConditionRender
