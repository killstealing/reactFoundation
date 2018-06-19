import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { browserHistory, Link } from 'react-router';
import './style.less';

export default class SearchInput extends Component {
  constructor() {
    super(...arguments);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.keyUpHandle = this.keyUpHandle.bind(this);
    this.state = {
      value: ''
    };
  }
  render() {
    return (
      <input type="text" className="search-input" placeholder="请输入关键字" value={this.state.value}
        onChange={this.handleChange} onKeyUp={this.keyUpHandle} />
    )
  }
  componentDidMount = () => {
    this.setState({
      value:this.props.value||''
    });  
  }
  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }
  keyUpHandle(e) {
    if (e.keyCode != 13) {
      return;
    }
    this.props.enterHandle(this.state.value);
  }
}
