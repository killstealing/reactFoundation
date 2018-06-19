import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { browserHistory, Link } from 'react-router';
import './style.less';
import SearchInput from '../SearchInput';

export default class SearchHeader extends Component {
    constructor() {
        super(...arguments);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.enterHandle = this.enterHandle.bind(this);
    }
    render() {
        return (
            <div id="search-header" className="clear-fix">
                <span className="back-icon float-left" onClick={this.clickHandle}>
                    <i className="icon-chevron-left"></i>
                </span>
                <div className="input-container">
                    <i className="icon-search"></i>&nbsp;
                    <SearchInput value={this.props.keyword} enterHandle={this.enterHandle}></SearchInput>
                </div>
            </div>
        )
    }
    enterHandle(value) {
        browserHistory.push('/search/all/' + encodeURIComponent(value));
    }
    clickHandle() {
        window.history.back();
    }
}
