import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin';
import './style.less';
import { getOrderListData } from '../../../fetch/user/OrderList';
import OrderListComponent from '../../../components/OrderList';

export default class OrderList extends Component {
    constructor() {
        super(...arguments);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: []
        };
    }
    render() {
        return (
            <div className="order-list-container">
                <h2>您的订单</h2>
                {
                    this.state.data.length
                    ?<OrderListComponent data={this.state.data}></OrderListComponent>
                    :<h2>Loading...</h2>
                }
            </div>
        )
    }
    componentDidMount = () => {
        if (this.props.username) {
            const result = getOrderListData(this.props.username);
            result.then(res => {
                return res.json();
            }).then(json => {
                this.setState({
                    data: json
                });
            }).catch(ex => {
                console.error('ex ' + ex);
            });
        }

    }

}
