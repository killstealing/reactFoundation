import React, { Component } from 'react'
import TodoList from './todoList';
import AddTodo from './addTodo.1';

export default () => {
    return (
        <div className="todos">
            <AddTodo ></AddTodo>
            <TodoList ></TodoList>
        </div>
    );
}
