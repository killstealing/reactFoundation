import React, { Component } from 'react';
import PCNewsBlock from './pc_news_block';
import PCNewsImageBlock from './pc_news_image_block';
import { Row, Col, Input, Button, Checkbox, Form, Modal,Tabs,Menu, Icon,Carousel } from 'antd';
const TabPane = Tabs.TabPane;



export default class PCNewscontainer extends Component {
  render() {
    const settings={
        dots:true,
        infinite:true,
        speed:500,
        sliderToShow:1,
        autoplay:true
    };
    const divStyle={
        float:"left"
    };
    return (
      <div className="main">
        <Row>
            <Col span={2}></Col>
            <Col span={20} className="container">
                <div className="leftContainer">
                    <div className="carousel">
                        <Carousel {...settings}>
                            <div><img src={require('./../images/carousel_1.jpg')}/></div>
                            <div><img src={require('./../images/carousel_2.jpg')}/></div>
                            <div><img src={require('./../images/carousel_3.jpg')}/></div>
                            <div><img src={require('./../images/carousel_4.jpg')}/></div>
                        </Carousel>
                    </div>
                    <PCNewsImageBlock count={6} type="guoji" width="400px" cartTitle="国际头条"
                        imageWidth="100px"/>
                </div>
                <Tabs className="tabs_news">
                    <TabPane tab="新闻" key="1">
                        <PCNewsBlock count={3} type="yule" width="100%" bordered="false"/>
                    </TabPane>
                    <TabPane tab="国际" key="2">
                        <PCNewsBlock count={10} type="guoji" width="100%" bordered="false" />
                    </TabPane>
                </Tabs>
                <div style={divStyle}>
                    <PCNewsImageBlock count={8} type="guonei" width="100%" cartTitle="国内新闻" imageWidth="132px"/>
                    <PCNewsImageBlock count={16} type="yule" width="100%" cartTitle="娱乐新闻" imageWidth="132px"/>
                </div>
            </Col>
            <Col span={2}></Col>
        </Row>
      </div>
    )
  }
}
