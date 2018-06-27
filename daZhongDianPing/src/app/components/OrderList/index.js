import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin';
import './style.less';
import Item from './Item';

export default class OrderList extends Component {
    constructor(){
        super(...arguments);
        this.shouldComponentUpdate=PureRenderMixin.shouldComponentUpdate.bind(this);
    }
  render() {
    return (
      <div className="order-list-container">
        {
          this.props.data.map((item,index)=>{
            return <Item key={index} data={item}></Item>;
          })
        }
      </div>
    )
  }
}
