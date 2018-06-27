import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'
import { browserHistory, Link } from 'react-router';

export default class Header extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.clickHandle=this.clickHandle.bind(this);
    }
    render() {
        return (
            <div id="common-header" className="clear-fix">
                <span className="back-icon" onClick={this.clickHandle}>
                    <i className="icon-chevron-left"></i>
                </span>
                <h1>{this.props.title} </h1>
            </div>
        )
    }
    clickHandle(){
        // console.log('header '+window.location);
        // window.history.back();
        const backRouter=this.props.backRouter;
        if(backRouter){
            browserHistory.push(backRouter);
        }else{
            window.history.back();
        }
        // browserHistory.goBack();
    }
}
