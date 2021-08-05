import React from 'react'

const Hoc=WrapperComponent=>{
    class ClickHandler extends React.Component{
        constructor(props) {
            super(props)
        
            this.state = {
                 count:0
            }
            this.increase=this.increase.bind(this)
        }
        increase(){
            this.setState({
                count:this.state.count+1
            })
        }
        render(){
            return <WrapperComponent count={this.state.count} increase={this.increase} {...this.props}/>
        }
    }
    return ClickHandler
}

export default Hoc
