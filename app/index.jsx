import React from 'react'
import { render } from 'react-dom'
import { hashHistory } from 'react-router'

import RouteMap from './router/routeMap'
import './static/css/common.less'
class Hello extends React.Component{
    render(){
        return (
            <div>
                <header>这是头部</header>
                <RouteMap history={hashHistory} />
                <footer>这是尾部</footer>
            </div>
        )
    }
}
render(
    <Hello/>,
    document.getElementById('root')
)
