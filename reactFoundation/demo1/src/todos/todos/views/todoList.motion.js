import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FilterTypes } from './../../Constants';
import * as Actions from './../Actions';
import { connect } from 'react-redux';
import TodoItem from './todoItem.1';
import { createSelector } from 'reselect';
import TransitionGroup from 'react-addons-css-transition-group';
import './todoItem.css';
import {spring,TransitionMotion} from 'react-motion';

const willLeave=()=>{
    return {
        height:spring(0),
        opacity:spring(0)
    }
}
const willEnter=()=>{
    return {
        height:0,
        opacity:0
    }
}
const getStyles=(todos)=>{
    return todos.map(item=>{
        return {
            key:item.id.toString(),
            data:item,
            style:{
                height:spring(60),
                opacity:spring(1)
            }
        }
    });
}

const TodoList = ({ todos }) => {
    console.log('todolist ' + JSON.stringify(todos));
    const styles=getStyles(todos);
    return (
            <TransitionMotion willLeave={willLeave} willEnter={willEnter} styles={styles}>
            {
                interpolatedStyles=>
                <ul>
                    {
                        interpolatedStyles.map(config=>{
                            const {data,style,key}=config;
                            const item=data;
                            return (
                                <TodoItem style={style} key={item.id} text={item.text} completed={item.completed}
                                    id={item.id}></TodoItem>
                            );
                        })
                    }
                </ul>
            }
            </TransitionMotion>
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