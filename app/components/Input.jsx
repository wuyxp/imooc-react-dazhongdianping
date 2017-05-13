import React from 'react'

export default class Input extends React.Component{
    render(){
        return(
            <div>
                <input 
                    type='text' 
                    value={this.props.value} 
                    onChange={this.props.change}
                />
                <button onClick={this.props.click}>添加</button>
            </div>
        )
    }
}
