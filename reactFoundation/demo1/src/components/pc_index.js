import React, { Component } from 'react';
import PCHeader from './pc_header';
import PCFooter from './pc_footer';
import {BackTop} from 'antd';

export default class PCIndex extends Component {
    render() {
        return (
            <div className="pcIndex">
                <PCHeader></PCHeader>
                {this.props.children}
                <PCFooter></PCFooter>
                <BackTop />
            </div>
        )
    }
}
