import React from 'react'

class Detail extends React.Component{
    render(){
        return (
            <div>
                <div>详情页面</div>
                <h2>参数是:{this.props.params.id}</h2>
            </div>
        )
    }
}

export default Detail;
