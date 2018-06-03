import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class CountDown extends Component {
    constructor(){
        super(...arguments);
        this.state={count:this.props.startCount};
    }
    componentDidMount = () => {
      this.intervalHandle=setInterval(()=>{
          const newCount=this.state.count-1;
          if(newCount>=0){
            this.setState({count:newCount});
          }else{
              window.clearInterval(this.intervalHandle);
          }
      },1000);
    }
    
  render() {
    return this.props.children(this.state.count);
  }
}

CountDown.propTypes={
    children:PropTypes.func.isRequired,
    startCount:PropTypes.number.isRequired
};