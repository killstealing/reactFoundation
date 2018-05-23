import React, { Component } from 'react';
import {
    Row, Col, Input, Button, Checkbox, Form, Modal, Tabs, Menu, Icon, Carousel,
    Card
} from 'antd';
import './../css/mobile_list.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
const TabPane = Tabs.TabPane;

export default class MobileList extends Component {
    constructor() {
        super();
        this.state = {
            news: ''
        };
    }
    componentWillMount() {
        var myFetchOptions = {
            method: 'GET'
        };
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" + this.props.type + "&count=" + this.props.count, myFetchOptions).then(response => response.json()).then(json => this.setState({ news: json }));
    };
    render() {
        const { news } = this.state;
        const newsList = news.length ?
            news.map((newsItem, index) => (
                <li key={index}>
                    <Link to={`details/${newsItem.uniquekey}`} target="_blank">
                        <div className="mobileNewsList">
                            <img src={newsItem.thumbnail_pic_s} alt="" />
                            <div className="mobileNewListItem">
                                <h3>{newsItem.title}</h3>
                                <div>
                                    <p>{newsItem.realtype}</p>
                                    <p>{newsItem.date}</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                </li>
            ))
            : '没有加载到任何新闻';
        return (
            <div className="topNewsList">
                <Card>
                        <ul>
                            {newsList}
                        </ul>
                </Card>
            </div>
        )
    }
}
