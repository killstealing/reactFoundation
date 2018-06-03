import React, { Component } from 'react'

export default class componentName extends Component {
  render() {
    return (
      <div>
        <input type="text" id="input1" ref={(input)=>{this.input1=input;}}/>
        <input type="text" id="input2" ref={(input)=>{this.input2=input;}}/>
        <input type="text" id="input3" ref={(input)=>{this.input3=input;}}/>
      </div>
    )
  }
}
