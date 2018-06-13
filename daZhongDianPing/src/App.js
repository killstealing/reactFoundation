import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const arr=['aa','bb','cc'];
    return (
      <div>
        <ul>
          {
            arr.map((item,index)=>(
              <li key={index}>{item}</li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default App;
