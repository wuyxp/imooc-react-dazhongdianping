import React from 'react'

export default class Todo extends React.Component{
    render(){
        return(
            <ul>
                {this.props.data && this.props.data.length > 0 ?
                    this.props.data.map((item,index) => {
                        return(
                            <li
                                key={index}
                                className={item.done ? 'done' : ''}
                                onClick={this.props.click.bind(this,index)}
                            >
                                {item.text}
                            </li>
                        )
                    })
                     : <p> 空 </p>
                }
            </ul>
        )
    }
}
