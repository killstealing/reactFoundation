import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './css/pc.css';
import './css/mobile.css';
import TodoApp from './todos';
import { Provider } from 'react-redux';
import store from './todos/Store';


ReactDOM.render(
    <Provider store={store}>
        <TodoApp />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
