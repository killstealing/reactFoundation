import React, { Component } from 'react'
import './style.less';
import RureRenderMixin from 'react-addons-pure-render-mixin';
import img from '../../static/images/detailInfo/detailInfo.png';
import Star from '../../components/Star';

class DetailInfo extends Component {
    constructor(){
        super(...arguments);
        this.shouldComponentUpdate=RureRenderMixin.shouldComponentUpdate.bind(this);
    }
  render() {
    const data=this.props.data;
    console.log(' data '+JSON.stringify(data));
    return (
      <div id="detail-info-container">
        <div className="info-container clear-fix">
          <div className="info-img-container float-left">
            <img src={img} />
          </div>
          <div className="info-content">
            <h1>{data.title}</h1>
            <div className="star-container">
              <Star star={data.star}></Star>
              <span className="price">￥{data.price}</span>
            </div>
            <p className="sub-title">{data.subTitle}</p>
          </div>
        </div>
        <p dangerouslySetInnerHTML={{__html:data.desc}} className="info-desc"></p>
      </div>
    )
  }
}

export default DetailInfo;