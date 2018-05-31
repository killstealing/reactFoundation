import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FilterTypes } from './../../Constants';
import * as Actions from './../Actions';
import {connect} from 'react-redux';
import TodoItem from './todoItem.1';

const TodoList = ({ todos }) => {
    console.log('todolist '+JSON.stringify(todos));
    return (
        <ul>
            {
                todos.map((item) => {
                    return (
                        <TodoItem key={item.id} text={item.text} completed={item.completed}
                        id={item.id}></TodoItem>
                    );
                })
            }
        </ul>
    );
}

TodoList.propTypes = {
    todos: PropTypes.array.isRequired
};

const selectVisibleTodos = (todos, filter) => {
    console.log('filter'+filter+todos);
    switch (filter) {
        case FilterTypes.ALL:
            return todos;
        case FilterTypes.COMPLETED:
            return todos.filter(item=>item.completed);
        case FilterTypes.UNCOMPLETED:
            return todos.filter(item=>!item.completed);
        default:
            // return 'aaa';
            throw new Error('unsupported filter');
    }
}

const mapStateToProps=(state)=>{
    return {
        todos:selectVisibleTodos(state.TodosReducer,state.FilterReducer)
    }
}

// const mapDispatchToProps=(dispatch)=>{
//     return {
//         onToggleTodo: (id)=>{
//             dispatch(Actions.toggleAction(id))
//         },
//         onRemoveTodo:(id)=>{
//             dispatch(Actions.delAction(id))
//         }
//     }
// }

export default connect(mapStateToProps, null)(TodoList)