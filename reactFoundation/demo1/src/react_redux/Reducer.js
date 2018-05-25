import * as ActionTypes from './ActionTypes';

export default (state,action)=>{
    const caption=action.caption;
    switch (action.type) {
        case ActionTypes.INCREMENT:
            return {...state,[caption]:state[caption]+1};
        case ActionTypes.DECREMENT:
            return {...state,[caption]:state[caption]-1};
        default:
            return state;
    }
}