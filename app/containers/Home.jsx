import React from 'react'

import { Link } from 'react-router'
class Home extends React.Component{
    render(){
        return (
            <div>
                <div>这是首页</div>
                <Link to="/list">进入列表</Link>
            </div>
        )
    }
}
export default Home
