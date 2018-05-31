import { createStore } from 'redux';
import reducer from './Reducer';

const initValues = {
    'Second': 10,
    'First': 0,
    'Third': 20
};

const store = createStore(reducer, initValues);
export default store;
