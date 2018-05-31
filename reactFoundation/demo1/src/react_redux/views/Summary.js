import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';

function Summary({ value }) {
  return (
    <div>
      Total count: {value}
    </div>
  );
}

function mapStateToProps(state, ownProps) {
  let value = 0;
  for (const key in state) {
    if (state.hasOwnProperty(key)) {
      value += state[key];
    }
  }
  return {
    value: value
  };
}

export default connect(mapStateToProps)(Summary)