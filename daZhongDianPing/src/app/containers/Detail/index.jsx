import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Header from '../../components/Header';
import Info from './subpage/info';

export default class Detail extends Component {
  constructor() {
    super(...arguments);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {
    //商户ID
    const id = this.props.params.id;
    return (
      <div>
        <Header title="商户详情"></Header>
        <Info></Info>
      </div>
    )
  }
}
