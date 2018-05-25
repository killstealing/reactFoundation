import React, { Component } from 'react';
import MobileHeader from './mobile_header';
import { Tabs,Carousel } from 'antd';
import MobileList from './mobile_list';
import MobileContainer from './mobile_container';
const TabPane = Tabs.TabPane;

export default class MobileIndex extends Component {
  render() {
    return (
      <div>
        <MobileHeader></MobileHeader>
        <MobileContainer></MobileContainer>
      </div>
    )
  }
}
