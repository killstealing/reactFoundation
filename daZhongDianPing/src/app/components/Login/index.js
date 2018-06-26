import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin';
import './style.less';

export default class LoginComponent extends Component {
    constructor() {
        super(...arguments);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state={
            phone:''
        };
        this.changeHandle=this.changeHandle.bind(this);
        this.clickHandle=this.clickHandle.bind(this);
    }
    render() {
        console.log(this.props.loginHandle);
        return (
            <div id="login-container">
                <div className="input-container phone-container">
                    <i className="icon-tablet"></i>
                    <input type="text" placeholder="输入手机号" onChange={this.changeHandle}
                    value={this.state.phone}/>
                </div>
                <div className="input-container password-container">
                    <i className="icon-key"></i>
                    <button>发送验证码</button>
                    <input type="text" placeholder="输入验证码"/>
                </div>
                <button className="btn-login" onClick={this.clickHandle}>登录</button>
            </div>
        )
    }
    changeHandle(e){
        this.setState({
            phone:e.target.value
        });
    }
    clickHandle(){
        const username=this.state.phone;
        const loginHandle=this.props.loginHandle;
        loginHandle(username);
    }
}
