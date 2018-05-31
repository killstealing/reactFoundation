import React, { Component } from 'react'
import { view as FilterCom } from './filter';
import { view as TodosCom } from './todos';

export default class Todos extends Component {
  render() {
    return (
      <div>
        <TodosCom></TodosCom>
        <FilterCom></FilterCom>
      </div>
    )
  }
}
