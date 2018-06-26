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
    }
    render() {
        console.log(this.props.loginHandle);
        return (
            <div>
                <input type="text" placeholder="输入手机号" onChange={this.changeHandle}
                 value={this.state.phone}/>
            </div>
        )
    }
    changeHandle(e){
        this.setState({
            phone:e.target.value
        });
    }
}
