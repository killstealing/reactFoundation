import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Header from '../../components/Header';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { browserHistory } from 'react-router';
import * as userInfoActionsFromOtherFile from '../../actions/userinfo';
import LoginComponent from '../../components/Login';

class Login extends Component {
    constructor() {
        super(...arguments);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            checking: true
        };
        this.doCheck = this.doCheck.bind(this);
        this.goUserPage = this.goUserPage.bind(this);
        this.loginHandle=this.loginHandle.bind(this);
    }
    render() {
        return (
            <div>
                <Header title="登录"></Header>
                {
                    this.state.checking
                        ? <div>等待中</div>
                        : <LoginComponent loginHandle={this.loginHandle}>这里将要展示登录组件</LoginComponent>
                }
            </div>
        )
    }
    componentDidMount = () => {
        this.doCheck();
    }
    // 登录成功之后的处理
    loginHandle(username) {
        //保存用户名
        const actions = this.props.userInfoActions;
        const userinfo=this.props.userinfo;
        userinfo.username=username;
        actions.update(userinfo);

        //跳转链接
        const params=this.props.params;
        console.log('login '+JSON.stringify(params));
        const router=params.router;
        const routerId=params.id;
        if(router){
            browserHistory.push('/'+router+'/'+routerId);
        }else{
            //跳转到默认页面---即，用户中心页 
            this.goUserPage();
        }
    }
    doCheck() {
        const userinfo = this.props.userinfo;
        if (userinfo.username) {
            //已经登录
            this.goUserPage();
        } else {
            //尚未登录
            this.setState({
                checking: false
            });
        }
    }
    goUserPage() {
        browserHistory.push('/User');
    }

}

function mapStateToProps(state, ownProps) {
    return {
        userinfo: state.userinfoReducer
    }
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);