import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin';
import './style.less';

export default class UserInfo extends Component {
    constructor() {
        super(...arguments);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div className="userinfo-container">
                <p>
                    <i className="icon-user"></i>
                    &nbsp;
                    {this.props.username}
                </p>
                <p>
                    <i className="icon-map-marker"></i>
                    &nbsp;&nbsp;
                    {this.props.city}
                </p>

            </div>
        )
    }
}
