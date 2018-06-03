import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class Demo1 extends Component {
    constructor(){
        super(...arguments);
    }
  render() {
    return (
      <div>
          <label>{this.props.title}</label>
          <h1>{this.props.title1}</h1>
          <h1>{this.props.newTitle}</h1>
      </div>
    )
  }
}

Demo1.propTypes={
  title:PropTypes.string.isRequired,
  title1:PropTypes.string.isRequired
};

Demo1.defaultValues={
  newTitle:''
};