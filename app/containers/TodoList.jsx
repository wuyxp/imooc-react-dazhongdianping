import React from 'react'
import Input from '../components/Input'
import Todo from '../components/Todo'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as todo from '../actions/todo'

class TodoList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        };
    }
    changeDone(index){

    }
    change(event){
        this.setState({
            value:event.target.value
        })
    }
    addTodo(){
        this.props.todo.add({
            text: this.state.value,
            done: false
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
                    data={this.props.data}
                    click={this.changeDone.bind(this)}
                />
            </div>
        )
    }
    componentDidMount(){
        this.props.todo.add({
            text: 'aaaaaa',
            done: false
        })
    }
}
function mapStateToProps(state){
    return {
        data: state.todo
    }
}

function mapDispatchToProps(dispatch){
    return {
        todo: bindActionCreators(todo, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)
