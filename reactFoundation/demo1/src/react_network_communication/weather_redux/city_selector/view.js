import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as Actions from './../weather/actions';
import PropTypes from 'prop-types'

const CITY_CODES = {
    '北京': 101010100,
    '上海': 101020100,
    '广州': 101280101,
    '深圳': 101280601
};
class CitySelector extends Component{
    constructor(){
        super(...arguments);
        this.onChange=this.onChange.bind(this);
    }
    onChange(ev){
        const cityCode=ev.target.value;
        this.props.onSelectCity(cityCode);
    }
    componentDidMount = () => {
      const defaultCity=Object.keys(CITY_CODES)[0];
      console.log(defaultCity);
      this.props.onSelectCity(CITY_CODES[defaultCity]);
    }
    render() {
      return (
        <select onChange={this.onChange}>
          {
              Object.keys(CITY_CODES).map(
                  cityName=><option key={cityName} value={CITY_CODES[cityName]}>{cityName}</option>
              )
          }
        </select>
      )
    }
}

CitySelector.propTypes={
    onSelectCity:PropTypes.func.isRequired
};

const mapDispatchToProps=(dispatch)=>{
    return {
        onSelectCity:(cityCode)=>{
            dispatch(Actions.fetchWeather(cityCode))
        }
    };
}

export default connect(null, mapDispatchToProps)(CitySelector)