import React, { Component } from 'react'
import {
    Row, Col, Input, Button, Checkbox, Form, Modal, Tabs, Menu, Icon, Carousel,
    Card
} from 'antd';
import PCNewsImageBlock from './pc_news_image_block';
import CommonComments from './common_comments';

export default class PCNewsDetails extends Component {
    constructor(){
        super();
        this.state={
            newsItem:''
        };
    }
    componentDidMount(){
        var myFetchOptions = {
			method: 'GET'
		};
		fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=" + this.props.params.uniquekey, myFetchOptions).then(response => response.json()).then(json => {
			this.setState({newsItem: json});
			document.title = this.state.newsItem.title + " - React News | React 驱动的新闻平台";
		})
    }
    createMarkup() {
		return {__html: this.state.newsItem.pagecontent};
	};
  render() {
    return (
      <div className="main">
        <Row>
            <Col span={2}></Col>
            <Col span={14} className="container">
                <div className="articleContainer" dangerouslySetInnerHTML={this.createMarkup()}></div>
                <CommonComments uniquekey={this.props.params.uniquekey}></CommonComments>
            </Col>
            <Col span={6}>
                <PCNewsImageBlock count={30} type="guoji" width="100%" bordered="false" 
                imageWidth="120px"></PCNewsImageBlock>
            </Col>
            <Col span={2}></Col>
        </Row>
      </div>
    )
  }
}
