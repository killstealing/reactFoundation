import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'
import { browserHistory, Link } from 'react-router';

export default class Header extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.clickCityName = this.clickCityName.bind(this);
    }
    render() {
        return (
            <div id="home-header" className="clear-fix">
                <div className="home-header-left float-left">
                    <Link to="/city">
                        <span>{this.props.cityName}</span>
                        &nbsp;
                        <i className="icon-angle-down"></i>
                    </Link>
                </div>
                <div className="home-header-right float-right">
                    <i className="icon-user"></i>
                </div>
                <div className="home-header-middle">
                    <div className="search-container">
                        <i className="icon-search"></i>
                        <input type="text" placeholder="请输入关键字" />
                    </div>
                </div>
            </div>
        )
    }
    clickCityName() {
        // this.context.router.push({
        //     pathName:'/city'
        // });
    }
    clickHandle() {
        window.history.back()
    }
}
