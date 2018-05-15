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
        <HelloWorld showContent="IronMan1111"/>
        <HelloWorld showContent="SuperMan1111"/>
        <HelloWorld showContent="BatMan111s"/>
    </div>,
    document.querySelector("#container")
);