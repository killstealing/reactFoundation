import React, { Component } from 'react'
import { Button } from 'antd';
import store from './../Store';
import * as Actions from './../Actions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function Counter({ caption, value, onIncrement, onDecrement }) {
    return (
        <div>
            <Button onClick={onIncrement}>+</Button>
            <Button onClick={onDecrement}>-</Button>
            {caption} count: {value}
        </div>
    );
}

Counter.propTypes={
    caption:PropTypes.string.isRequired,
    onIncrement:PropTypes.func.isRequired,
    onDecrement:PropTypes.func.isRequired,
    value:PropTypes.number.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        value: state[ownProps.caption]
    };
}
function mapDispatchToProps(dispatch, ownProps) {
    return {
        onIncrement: () => {
            dispatch(Actions.increment(ownProps.caption));
        },
        onDecrement: () => {
            dispatch(Actions.decrement(ownProps.caption))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)