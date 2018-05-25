import React, { Component } from 'react'
import Counter from './Counter';
import Summary from './Summary';

export default class CounterPanel extends Component {
  render() {
    return (
      <div>
        <Counter caption="First"></Counter>
        <Counter caption="Second"></Counter>
        <Counter caption="Third"></Counter>
        <hr />
        <Summary></Summary>
      </div>
    )
  }
}
