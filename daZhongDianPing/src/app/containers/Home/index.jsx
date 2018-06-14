import React, { Component } from 'react'
import { connect } from 'react-redux'
import HomeHeader from '../../components/Header';
import Category from '../../components/Category';
import Ad from './subpage/Ad';
import List from './subpage/List';


class Home extends Component {
  render() {
    return (
      <div>
        <HomeHeader cityName={this.props.userinfo.cityName}></HomeHeader>
        <Category></Category>
        <Ad></Ad>
        <List cityName={this.props.userinfo.cityName}></List>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    userinfo: state.userinfoReducer
  };
}


export default connect(mapStateToProps, null)(Home)