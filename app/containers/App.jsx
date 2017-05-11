import React from "react"

import { Provider } from 'react-redux'
import configureStore from '../store/configureStore'

import UserInfo from './UserInfo'

const store = configureStore()

class App extends React.Component{
    render(){
        return (
            <div>
                <Provider store = {store}>
                    <UserInfo />
                </Provider>
                {this.props.children}
            </div>
        )
    }
}
export default App;
