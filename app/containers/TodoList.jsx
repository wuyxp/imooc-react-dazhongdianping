import React from 'react'
import Input from '../components/Input'
import Todo from '../components/Todo'

class TodoList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            data: [{
                text:'吃饭',
                done:true
            },{
                text:'睡觉',
                done:true
            },{
                text:'学习',
                done:false
            }]
        };
    }
    changeDone(index){
        let data = this.state.data;
        data[index].done = !data[index].done;
        this.setState({
            data
        })
    }
    addTodo(){
        let text = this.state.value;
        this.setState({
            data:[{text,done:false},...this.state.data],
            value:''
        });
    }
    change(event){
        this.setState({
            value:event.target.value
        }) 
    }
    render(){
        return(
            <div>
                TODO LIST    
                <Input 
                    value={this.state.value}
                    change={this.change.bind(this)}
                    click={this.addTodo.bind(this)}
                />
                <Todo 
                    data={this.state.data}
                    click={this.changeDone.bind(this)}
                />
            </div>
        )
    }
}

export default TodoList
