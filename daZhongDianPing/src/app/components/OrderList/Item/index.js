import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin';
import './style.less';
import img from '../../../static/images/list1.png';

export default class Item extends Component {
    constructor(){
        super(...arguments);
        this.shouldComponentUpdate=PureRenderMixin.shouldComponentUpdate.bind(this);
    }
  render() {
    const data=this.props.data;
    return (
      <div className="order-item-container clear-fix">
        <div className="order-item-img float-left">
          <img src={img}/>
        </div>
        <div className="order-item-comment float-right">
          <button>评价</button>
        </div>
        <div className="order-item-content">
          <span>商户：{data.title}</span>
          <span>数量：{data.count}</span>
          <span>价格：￥{data.price}</span>
        </div>
      </div>
    )
  }
}
