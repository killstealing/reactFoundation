import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin';
import LocalStore from '../util/localStore';
import { CITYNAME } from '../config/localStoreKey'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userInfoActionsFromOtherFile from '../actions/userinfo';

class App extends Component {
  constructor() {
    super(...arguments);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = { initDone: false };
  }
  componentDidMount() {
    let cityName = LocalStore.getItem(CITYNAME);
    console.log(cityName);
    if (cityName == null) {
      cityName = '北京';
    }
    this.props.userInfoActions.update({
      cityName: cityName
    });
    this.setState({
      initDone: true
    });
  }

  render() {
    return (
      <div>
        {
          this.state.initDone ? this.props.children : '加载中'
        }
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {

  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App)