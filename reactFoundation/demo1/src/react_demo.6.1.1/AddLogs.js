import React, { Component } from 'react'

// const AddLogs=(AddLogsDemo)=>{
function AddLogs(AddLogsDemo){
  console.log('Addlogs');
    return  class extends Component {
        render() {
          return <AddLogsDemo {...this.props}/>;
        }
      }
}

export default AddLogs;

// import React, { Component } from 'react';

// const simpleHoc = WrappedComponent => {
//   console.log('simpleHoc');
//   return class extends Component {
//     render() {
//       return <WrappedComponent {...this.props}/>
//     }
//   }
// }
// export default simpleHoc;

