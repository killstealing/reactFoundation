import React, { Component } from 'react'
import {
    Row, Col, Input, Button, Checkbox, Form, Modal, Tabs, Menu, Icon, Carousel,
    Card
} from 'antd';
import MobileHeader from './mobile_header';
import MobileList from './mobile_list';
import MobileContainer from './mobile_container';

export default class MobileDetails extends Component {
    constructor() {
        super();
        this.state = {
            newsItem: ''
        };
    }
    componentDidMount() {
        var myFetchOptions = {
            method: 'GET'
        };
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=" + this.props.params.uniquekey, myFetchOptions).then(response => response.json()).then(json => {
            this.setState({ newsItem: json });
            document.title = this.state.newsItem.title + " - React News | React 驱动的新闻平台";
        })
    }
    createMarkup() {
        return { __html: this.state.newsItem.pagecontent };
    };
    render() {
        return (
            <div className="mobileMain">
                <MobileHeader></MobileHeader>
                <div class="articleContainer" dangerouslySetInnerHTML={this.createMarkup()}></div>
            </div>
        )
    }
}
