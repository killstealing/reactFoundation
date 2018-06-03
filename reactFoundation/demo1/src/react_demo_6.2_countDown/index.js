import React, { Component } from 'react'
import CountDown from './CountDown';

export default class DemoComponent extends Component {
  render() {
      const customStyle={
          'margin':'40px'
      };
    return (
      <div>
        <CountDown startCount={10}>
            {
                (count)=><h1 style={customStyle}>{count>0?count:'新年快乐'}</h1>
            }
        </CountDown>
      </div>
    )
  }
}
