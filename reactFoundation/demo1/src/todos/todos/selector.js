import {createSelector} from 'reselect';
import {FilterTypes} from './../Constants';

const getFilter = (state) => state.FilterReducer;
const getTodos = (state) => state.TodosReducer;

export const selectVisibleTodos = createSelector(
  [getFilter, getTodos],
  (filter, todos) => {
    switch (filter) {
      case FilterTypes.ALL:
        return todos;
      case FilterTypes.COMPLETED:
        return todos.filter(item => item.completed);
      case FilterTypes.UNCOMPLETED:
        return todos.filter(item => !item.completed);
      default:
        throw new Error('unsupported filter');
    }
  }
);
