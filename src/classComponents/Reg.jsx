import React, { Component } from 'react'
import Memo from './Memo';
import Pure from './Pure';

export class Reg extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"aungkaungkhant"
        }
    }
    componentDidMount(){
        setInterval(() => {
            this.setState({
                name:'nansusanhtike'
            })
        }, 1000);
    }
    render() {
        console.log("Reg Component is render");
        return (
            <div>
                {this.state.name}
                <Memo />
                {/* <Pure name={this.state.name}/> */}
            </div>
        )
    }
}

export default Reg
