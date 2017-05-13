import React from 'react'
import { render } from 'react-dom'
import { hashHistory } from 'react-router'

import RouteMap from './router/routeMap'
import './static/css/common.less'

// 测试 fetch 的功能
//import { getData, postData } from './fetch/test.js'
import { getData, postData } from './fetch/data.js'
getData();
postData();
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
