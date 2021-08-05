import React, { PureComponent } from 'react'

 class Pure extends  PureComponent {
    render() {
        console.log("Pure jsx");
        const {name}=this.props
        return (
            <div>
                {name}
            </div>
        )
    }
}

export default Pure
