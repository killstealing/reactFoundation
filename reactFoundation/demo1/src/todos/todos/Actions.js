import * as ActionTypes from './ActionTypes';

let nextTodoId = 0;

export const addAction = (text) => ({
    type: ActionTypes.ADD_EVENT,
    completed:false,
    id:nextTodoId++,
    text:text
});

export const toggleAction=(id)=>({
    type:ActionTypes.TOGGLE_EVENT,
    id:id
});

export const delAction = (id) => ({
    type: ActionTypes.DELE_EVENT,
    id:id
});