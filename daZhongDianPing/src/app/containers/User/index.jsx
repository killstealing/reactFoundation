import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Header from '../../components/Header';
import { connect } from 'react-redux';
import {browserHistory} from 'react-router';
import UserInfo from '../../components/UserInfo';
import OrderList from './subpage/OrderList';


class User extends Component {
  constructor() {
    super(...arguments);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {
    const userinfo = this.props.userinfoReducer;
    return (
      <div>
        <Header title="用户中心" backRouter="/"></Header>
        <UserInfo username={userinfo.username} city={userinfo.cityName}></UserInfo>
        <OrderList username={userinfo.username}></OrderList>
      </div>
    )
  }
  componentDidMount = () => {
    //如果未登录，
    if(!this.props.userinfoReducer.username){
      browserHistory.push('/login');
    }
  }
  
}
function mapStateToProps(state,ownProps){
  return {
    userinfoReducer:state.userinfoReducer
  };
}
function mapDispatchToProps(dispatch,ownProps){
  return {

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(User)