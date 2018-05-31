import React, { Component } from 'react'
import PropTypes from 'prop-types'

function Summary ({sum}){
  return (
    <div>
      Total count: {sum}
    </div>
  );
}
export default class SummaryContainer extends Component {
  constructor(){
    super(...arguments);

    this.state=this.getOwnState();
    this.getOwnState=this.getOwnState.bind(this);
    this.onChange=this.onChange.bind(this);
  }
  getOwnState(){
    const counterValues=this.context.store.getState();
    let sum=0;
    for(const key in counterValues){
      if(counterValues.hasOwnProperty(key)){
        sum+=counterValues[key];
      }
    }
    return {
      sum:sum
    }
  }
  onChange(){
    this.setState(this.getOwnState());
  }
  componentDidMount = () => {
    this.context.store.subscribe(this.onChange);
  }
  componentWillUnmount = () => {
    this.context.store.unsubscribe(this.onChange);
  }
  shouldComponentUpdate = (nextProps, nextState) => {
    return nextState.sum!=this.state.sum;
  }
  render() {
    return (
      <Summary sum={this.state.sum}></Summary>
    )
  }
}

SummaryContainer.contextTypes  ={
  store:PropTypes.object
}