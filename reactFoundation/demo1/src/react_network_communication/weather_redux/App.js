import React, { Component } from 'react'
import {view as Weather} from './weather';
import {view as CitySelector} from './city_selector';

export default class App extends Component {
  render() {
    return (
      <div>
        <CitySelector></CitySelector>
        <Weather></Weather>
      </div>
    )
  }
}
