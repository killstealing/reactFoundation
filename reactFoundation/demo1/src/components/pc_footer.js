import React, { Component } from 'react';
import { Row, Col } from 'antd';

export default class PCFooter extends Component {
  render() {
    return (
      <footer>
        <Row>
            <Col span={2}></Col>
            <Col span={20}>
                &copy;&nbsp;2016 ReactNews.All right Reserved.
            </Col>
            <Col span={2}></Col>
        </Row>
      </footer>
    )
  }
}
