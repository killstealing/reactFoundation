import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'
import { browserHistory, Link } from 'react-router';
import SearchInput from '../../components/SearchInput';

export default class Header extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state={
            kwd:''
        };
        this.enterHandle=this.enterHandle.bind(this);
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
                        <SearchInput value="" enterHandle={this.enterHandle}></SearchInput>
                        {/* <input type="text" placeholder="请输入关键字" value={this.state.kwd} 
                        onChange={this.handleChange} onKeyUp={this.keyUpHandle}/> */}
                    </div>
                </div>
            </div>
        )
    }
    enterHandle(value){
        browserHistory.push('/search/all/'+encodeURIComponent(value));
    }
}
