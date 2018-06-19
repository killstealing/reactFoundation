import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userInfoActionsFromOtherFile from '../../actions/userinfo';
import Header from '../../components/Header';
import CurrentCity from '../../components/CurrentCity';
import CityList from '../../components/CityList';
import LocalStore from '../../util/localStore';
import { CITYNAME } from '../../config/localStoreKey';
import { browserHistory } from 'react-router';


class City extends Component {
  constructor() {
    super(...arguments);
    this.changeCity = this.changeCity.bind(this);
  }
  render() {
    return (
      <div>
        <Header title="选择城市"></Header>
        <CurrentCity cityName={this.props.userInfo.cityName}></CurrentCity>
        <CityList changeFn={this.changeCity}></CityList>
      </div>
    )
  }
  componentDidMount = () => {
    console.log(this.props.userInfo);
    console.log(this.props.userInfoActions);
  }
  changeCity(newCity) {
    if (newCity == null) {
      return;
    }
    //修改redux
    const userinfo = this.props.userInfo;
    userinfo.cityName = newCity;
    this.props.userInfoActions.update(userinfo);

    //修改localstorage
    LocalStore.setItem(CITYNAME, newCity);

    browserHistory.push('/');
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