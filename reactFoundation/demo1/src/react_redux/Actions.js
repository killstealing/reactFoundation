import * as ActionTypes from './ActionTypes';

export const increment=(caption)=>({
    type:ActionTypes.INCREMENT,
    caption:caption
});

export const decrement=(caption)=>({
    type:ActionTypes.DECREMENT,
    caption:caption
});