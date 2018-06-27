import { combineReducers } from 'redux'
import userinfoReducer from './userinfoReducer'
import storeReducer from './storeReducer';

export default combineReducers({
    userinfoReducer, storeReducer
})