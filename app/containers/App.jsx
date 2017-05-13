import React from "react"

import { Provider } from 'react-redux'
import configureStore from '../store/configureStore'

import reducer from '../reducers/index'

import UserInfo from './UserInfo'

const data = [{
    text: '吃饭',
    done: true
},{
    text: '睡觉',
    done: true
},{
    text: '学习',
    done: false
}]

const store = configureStore({todo:data})

class App extends React.Component{
    render(){
        return (
            <Provider store = {store}>
                <div>
                        <UserInfo />
                        <div>
                            {this.props.children}
                        </div>
                </div>
            </Provider>
        )
    }
}
export default App;
