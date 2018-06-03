import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './css/pc.css';
import './css/mobile.css';
// import TodoApp from './todos';
import { Provider } from 'react-redux';
// import store from './todos/Store';

// import Demo1 from './react_demo.6.1.1';

// import CountDown from './react_demo_6.2_countDown';
// import Weather from './react_network_communication/weather';
import store from './react_network_communication/weather_redux/store';
import Weather from './react_network_communication/weather_redux/App';
// import Weather from './react_demo1/App';
// import store from './react_demo1/Store';


ReactDOM.render(
    // <Provider store={store}>
    //     <TodoApp />
    // </Provider>
    // <Weather cityCode="101010100"></Weather>
    <Provider store={store}>
        <Weather></Weather>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
