import * as ActionTypes from './ActionTypes';
import { FilterTypes } from './../Constants';

export default (state = FilterTypes.ALL, action) => {
    console.log(state);
    switch (action.type) {
        case ActionTypes.SET_FILTER:
            return action.filter;
        default:
            return state;
    }
}
