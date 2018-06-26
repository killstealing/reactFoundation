import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Header from '../../components/Header';

export default class User extends Component {
  constructor(){
    super(...arguments);
    this.shouldComponentUpdate=PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {
    return (
      <div>
        <Header title="用户中心"></Header>
        <h1>User</h1>
      </div>
    )
  }
}
