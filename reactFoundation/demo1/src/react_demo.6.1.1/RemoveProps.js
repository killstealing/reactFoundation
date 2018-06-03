import React, { Component } from 'react';

// function removeUserProp(WrappedComponent) {
//   return function newRender(props) {
//     const {title, ...otherProps} = props;
//     return <WrappedComponent {...otherProps} />
//   }
// }
// export default removeUserProp;


function removeUserProp(WrappedComponent){
  return class extends Component{
    render() {
      const {title, ...otherProps} = this.props;
      return <WrappedComponent {...otherProps} />
    }
  }
}

export default removeUserProp;