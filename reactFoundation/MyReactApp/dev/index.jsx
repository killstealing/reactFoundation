import React from 'react';
import ReactDOM from 'react-dom';

class HelloWorld extends React.Component{
    render() {
        return (
            <div>
                Hello,{this.props.showContent}
            </div>
        )
    }
};

ReactDOM.render(
    <div>
        <HelloWorld showContent="IronMan"/>
        <HelloWorld showContent="SuperMan"/>
        <HelloWorld showContent="BatMan"/>
    </div>,
    document.querySelector("#container")
);