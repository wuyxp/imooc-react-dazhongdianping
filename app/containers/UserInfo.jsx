import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as userinfoActions from '../actions/userinfo'

class UserInfo extends React.Component{
    render(){
        return (
            <div>
                <p>
                    ID：{this.props.userinfo.userid}
                </p>
                <p>
                    城市：{this.props.userinfo.city}
                </p>
            </div>
        )
    }
    componentDidMount(){
        this.props.userinfoActions.login({
            userid: 'abc',
            city: 'beijing'
        })
    }
}

function mapStateToProps(state){
    return {
        userinfo: state.userinfo
    }
}

function mapDispatchToProps(dispatch){
    return {
        userinfoActions: bindActionCreators(userinfoActions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserInfo)
