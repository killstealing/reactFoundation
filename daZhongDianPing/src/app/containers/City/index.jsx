import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userInfoActionsFromOtherFile from '../../actions/userinfo';
import Header from '../../components/Header';


class City extends Component {
  render() {
    return (
      <div>
        <Header title="选择城市"></Header>
        <h1>{this.props.userInfo.cityName}</h1>
      </div>
    )
  }
  componentDidMount = () => {
    console.log(this.props.userInfo);
    console.log(this.props.userInfoActions);
  }
  
}
function mapStateToProps(state, ownProps) {
  return {
    userInfo: state.userinfoReducer
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(City)