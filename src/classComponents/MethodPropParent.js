import React, { Component } from 'react'
import MethodPropChild from './MethodPropChild';

class MethodPropParent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             gretting:"Hello aung kaung khant"
        }
        // this.gretting=this.gretting.bind(this);
    }
    
    gretting(){
        alert(this.state.gretting);
    }
    render() {
        return (
            <div>
                <MethodPropChild greetHandler={()=>this.gretting()} />
            </div>
        )
    }
}

export default MethodPropParent
