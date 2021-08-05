import React, { Component } from 'react'
import './myStyle.css'
class CssStyle extends Component {
    
    render() {
        let inlineStyle={
            fontSize:'30px',
            color:"blue"
        }
        const {name}=this.props;
        let className=name?"danger":"ok"
        
        return (
            <div>
                {/* <h1 className={`${className} font`}>Aung Kaung Khant</h1> */}
                <h1 style={inlineStyle}>Aung Kaung Khant</h1>
                <h1 className="greeting">Nan Su San Htike</h1>
            </div>
        )
    }
}

export default CssStyle
