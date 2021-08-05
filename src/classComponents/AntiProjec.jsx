import React, { Component } from 'react'
import AntiPj from './AntiPj';

export class AntiProjec extends Component {
    constructor(props) {
        super(props)
        const date=new Date();
        const todoCounter=1
        this.state = {
             todoCounter:todoCounter,
             lists:[
                 {
                     id:todoCounter,
                     createdAt:date,        
                 }
             ]
        }
    }
    addStart(){
        const date=new Date();
        const newId=this.state.todoCounter+1;
        const newList=[
            {id:newId,createdAt:date},
            ...this.state.lists
        ]
        this.setState({
            todoCounter:newId,
            lists:newList
        })
    }
    addEnd(){
        const date=new Date();
        const newId=this.state.todoCounter+1;
        const newList=[
            ...this.state.lists,
            {id:newId,createdAt:date}
        ]
        this.setState({
            todoCounter:newId,
            lists:newList
        })
    }
    sortEarlist(){
        const newList=this.state.lists.sort((a,b) =>{
            return b.createdAt-a.createdAt
        });
        this.setState({
            lists:newList
        })
    }
    sortLatest(){
        const newList=this.state.lists.sort((a,b) =>{
            return a.createdAt-b.createdAt;
        });
        this.setState({
            lists:newList
        })
    }

    render() {
        return (
            <div>
               <button onClick={()=>this.addStart()}>Add New To Start</button>
               <button onClick={()=>this.addEnd()}>Add New To End</button>
               <button onClick={()=>this.sortEarlist()}>Sort By Earlist</button>
               <button onClick={()=>this.sortLatest()}>Sort By Latest</button>
               <table>
                   <thead>
                       <tr>
                           <th>Index</th>
                           <th>Id</th>
                           <th>Created At</th>
                       </tr>
                   </thead>
                   <tbody>
                       {
                           this.state.lists.map((list,index) => <AntiPj  key={index} list={list} index={index}/>)
                       }
                     
                   </tbody>
               </table>
            </div>
        )
    }
}

export default AntiProjec
