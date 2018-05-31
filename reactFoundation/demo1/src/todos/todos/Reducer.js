import * as ActionTypes from './ActionTypes';

export default (state = [], action) => {
    console.log('todos reducer ',JSON.stringify(action));
    switch (action.type) {
        case ActionTypes.ADD_EVENT:
            return [{
                id: action.id,
                text: action.text,
                completed: false
            }, ...state];
        case ActionTypes.TOGGLE_EVENT:{
            return state.map((todoItem)=>{
                if(todoItem.id===action.id){
                    return {...todoItem,completed:!todoItem.completed};
                }else{
                    return todoItem;
                }
            });
        }
        case ActionTypes.DELE_EVENT:
            return state.filter((todoItem)=>{
                return todoItem.id!==action.id;
            });
        default:
            return state;
}
}
