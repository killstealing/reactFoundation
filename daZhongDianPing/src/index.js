import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// import App from './App';
import App from './app/index';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux'
import configureStore from './app/store/configureStore';

const store=configureStore();
ReactDOM.render(<Provider store={store}>
    <App></App>
</Provider>, document.getElementById('root'));
registerServiceWorker();
