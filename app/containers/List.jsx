import React from 'react'

import { hashHistory, Link } from 'react-router'
class List extends React.Component{
    constructor(props,context){
        super(props,context);
        this.state = {
            data:['red','green','blue','yellow']
        }
    }
    render(){
        return (
            <ul>
                {
                    this.state.data.map((item,index) => {
                        return(
                            <li key={index}>
                                <Link to={'/detail/'+item}>{item}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}
export default List
