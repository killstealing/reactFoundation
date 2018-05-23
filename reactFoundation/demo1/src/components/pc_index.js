import React, { Component } from 'react';
import PCHeader from './pc_header';
import PCFooter from './pc_footer';
import PCNewscontainer from './pc_newscontainer';


export default class PCIndex extends Component {
    render() {
        return (
            <div className="pcIndex">
                <PCHeader></PCHeader>
                <PCNewscontainer></PCNewscontainer>
                <PCFooter></PCFooter>
            </div>
        )
    }
}
