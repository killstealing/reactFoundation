import React, { Component } from 'react'
import TodoList from './todoList.motion.1';
import AddTodo from './addTodo.1';

export default () => {
    const todos={
        backgroundColor:'red'
    };
    return (
        <div style={todos}>
            <AddTodo ></AddTodo>
            <TodoList ></TodoList>
        </div>
    );
}
