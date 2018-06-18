import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'
import { browserHistory, Link } from 'react-router';

export default class Header extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div id="home-header" className="clear-fix">
                <h1>{this.props.title} </h1>
            </div>
        )
    }
}
