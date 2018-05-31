import React, { Component } from 'react'
import { Button } from 'antd';
import store from './../Store';
import * as Actions from './../Actions';
import PropTypes  from 'prop-types';

function Counter({ caption, count, onIncrement, onDecrement }) {
    return (
        <div>
            <Button onClick={onIncrement}>+</Button>
            <Button onClick={onDecrement}>-</Button>
            {caption} count: {count}
        </div>
    );
}

export default class CounterContainer extends Component {
    constructor() {
        super(...arguments);

        this.state = this.getOwnState();
        this.getOwnState = this.getOwnState.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onIncrement = this.onIncrement.bind(this);
        this.onDecrement = this.onDecrement.bind(this);
    }
    getOwnState() {
        return {
            count: this.context.store.getState()[this.props.caption]
        };
    }
    onChange() {
        this.setState(this.getOwnState());
    }
    shouldComponentUpdate = (nextProps, nextState) => {
        return nextProps.count != this.props.count || nextState.count != this.state.count;
    }
    componentDidMount = () => {
        this.context.store.subscribe(this.onChange);
    }
    componentWillUnmount = () => {
        this.context.store.unsubscribe(this.onChange);
    }
    onIncrement() {
        this.context.store.dispatch(Actions.increment(this.props.caption));
    }
    onDecrement() {
        this.context.store.dispatch(Actions.decrement(this.props.caption));
    }
    render() {
        return (
            <Counter caption={this.props.caption} count={this.state.count}
                onIncrement={this.onIncrement} onDecrement={this.onDecrement}></Counter>
        )
    }
}

CounterContainer.propTypes={
    caption:PropTypes.string.isRequired,
};

CounterContainer.contextTypes  ={
    store:PropTypes.object
}