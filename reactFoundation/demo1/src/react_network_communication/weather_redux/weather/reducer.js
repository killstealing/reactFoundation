import * as ActionTypes from './actionTypes';
import * as Actions from './actions';
import * as Status from './status';

export default (state={'status': Status.LOADING},action)=>{
    switch (action.type) {
        case ActionTypes.FETCH_STARTED:
            return {status:Status.LOADING};
        case ActionTypes.FETCH_SUCCESS:
            console.log(JSON.stringify(action.result));
            return {...state,status:Status.SUCCESS,...action.result};
        case ActionTypes.FETCH_FAILED:
            return {status:Status.FAILED};
        default:{
            return state;
        }
    }
}