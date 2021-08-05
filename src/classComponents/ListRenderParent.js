import React, { Component } from 'react'
import ListRenderChild from './ListRenderChild'
class ListRenderParent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            persons:[
                {
                    id:1,
                    name:"aungkaungkhant",
                    age:19
                },
                {
                   id:2,
                   name:"nansusanhtike",
                   age:19
               },
               {
                   id:3,
                   name:"mgmg",
                   age:29
               },
            ]
        }
    }
    
    render() {
        return (
            <div>
                {
                    this.state.persons.map(person => <ListRenderChild person={person} key={person.id}/>)
                }
            </div>
        )
    }
}

export default ListRenderParent
