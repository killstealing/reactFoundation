import React, { Component } from 'react'
import HomeHeader from '../../components/Header';
import { connect } from 'react-redux'

class Home extends Component {
  render() {
    console.log('userinfo '+JSON.stringify(this.props.userinfo));
    return (
      <div>
        <HomeHeader cityName={this.props.userinfo.cityName}></HomeHeader>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log('state '+JSON.stringify(state));
  return {
    userinfo: state.userinfoReducer
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)