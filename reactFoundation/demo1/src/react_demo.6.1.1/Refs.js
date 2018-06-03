import React, { Component } from 'react'

const refsHOC=(WrappedComponent)=>{
    return class HOCComponent extends React.Component{
        constructor(){
            super(...arguments);

            this.linkRef=this.linkRef.bind(this);
        }
        linkRef(wrappedInstance){
            this._root=wrappedInstance;
        }
        componentDidMount = () => {
          console.log(this._root,'this._root');
          this._root.input1.value='aaaa';
        }
        
        render(){
            const props={...this.props,ref:this.linkRef};
            return <WrappedComponent {...props}/>;
        }
    }
}

export default refsHOC;