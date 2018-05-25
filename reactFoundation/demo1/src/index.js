import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './css/pc.css';
import './css/mobile.css';
import CounterPanel from './react_redux/views/CounterPanel';
import Provider from './react_redux/Provider';
import store from './react_redux/Store';


ReactDOM.render(
    <Provider store={store}>
        <CounterPanel></CounterPanel>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
