import React, { Component } from 'react'

const AddProps=(DemoComponent,title)=>{
    return class extends Component{
        render() {
          let newProps={newTitle:title};
          return <DemoComponent {...this.props} {...newProps}/>;
        }
    }
}

export default AddProps;