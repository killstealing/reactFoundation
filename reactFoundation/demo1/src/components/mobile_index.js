import React, { Component } from 'react';
import MobileHeader from './mobile_header';
import { Tabs,Carousel } from 'antd';
import MobileList from './mobile_list';
const TabPane = Tabs.TabPane;

export default class MobileIndex extends Component {
  render() {
    const settings={
      dots:true,
      infinite:true,
      speed:500,
      sliderToShow:1,
      autoplay:true
  };
    return (
      <div>
        <MobileHeader></MobileHeader>
        <Tabs>
          <TabPane tab="社会" key="2">
            <div className="carousel">
                <Carousel {...settings}>
                    <div><img src={require('./../images/carousel_1.jpg')}/></div>
                    <div><img src={require('./../images/carousel_2.jpg')}/></div>
                    <div><img src={require('./../images/carousel_3.jpg')}/></div>
                    <div><img src={require('./../images/carousel_4.jpg')}/></div>
                </Carousel>
            </div>
            <MobileList type="shehui" count="20"></MobileList>
          </TabPane>
          <TabPane tab="国内" key="3">
          <div className="carousel">
                <Carousel {...settings}>
                    <div><img src={require('./../images/carousel_1.jpg')}/></div>
                    <div><img src={require('./../images/carousel_2.jpg')}/></div>
                    <div><img src={require('./../images/carousel_3.jpg')}/></div>
                    <div><img src={require('./../images/carousel_4.jpg')}/></div>
                </Carousel>
            </div>
            <MobileList type="guonei" count="20"></MobileList>
          </TabPane>
          <TabPane tab="国际" key="4">
            <MobileList type="guoji" count="20"></MobileList>
          </TabPane>
          <TabPane tab="娱乐" key="5">
            <MobileList type="yule" count="20"></MobileList>
          </TabPane>
          <TabPane tab="体育" key="6">
            <MobileList type="tiyu" count="20"></MobileList>
          </TabPane>
          <TabPane tab="科技" key="7">
            <MobileList type="keji" count="20"></MobileList>
          </TabPane>
        </Tabs>
      </div>
    )
  }
}
