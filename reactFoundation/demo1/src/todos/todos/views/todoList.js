import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FilterTypes } from './../../Constants';
import * as Actions from './../Actions';
import { connect } from 'react-redux';
import TodoItem from './todoItem.1';
import { createSelector } from 'reselect';
import TransitionGroup from 'react-addons-css-transition-group';
import './todoItem.css';

const TodoList = ({ todos }) => {
    console.log('todolist ' + JSON.stringify(todos));
    return (
        <ul>
            <TransitionGroup transitionName="fade" transitionEnterTimeout={1000}
                transitionLeaveTimeout={2000} transitionAppear={true}
                transitionAppearTimeout={2000}>
            {
                todos.map((item) => {
                    return (
                        <TodoItem key={item.id} text={item.text} completed={item.completed}
                            id={item.id}></TodoItem>
                    );
                })
            }
            </TransitionGroup>
        </ul>
    );
}

TodoList.propTypes = {
    todos: PropTypes.array.isRequired
};

const getTodos=(state)=>state.TodosReducer;
const getFilter=(state)=>state.FilterReducer;

const selectVisibleTodos = createSelector(
    [getTodos,getFilter],
    (todos, filter) => {
    console.log('filter' + filter + todos);
    switch (filter) {
        case FilterTypes.ALL:
            return todos;
        case FilterTypes.COMPLETED:
            return todos.filter(item => item.completed);
        case FilterTypes.UNCOMPLETED:
            return todos.filter(item => !item.completed);
        default:
            // return 'aaa';
            throw new Error('unsupported filter');
    }
});

const mapStateToProps = (state) => {
    return {
        todos: selectVisibleTodos(state)
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