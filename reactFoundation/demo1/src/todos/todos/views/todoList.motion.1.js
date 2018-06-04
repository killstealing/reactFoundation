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
import {selectVisibleTodos} from './../selector';

const willLeave = () => {
    return {
      height: spring(0),
      opacity: spring(0)
    };
  }
  
  const willEnter = () => {
    return {
      height: 0,
      opacity: 0
    };
  };
  
  const getStyles = (todos) => {
    return todos.map(item => {
      return {
        key: item.id.toString(),
        data: item,
        style: {
          height: spring(100),
          opacity: spring(1)
        }
      };
    });
  }
  
  
  const TodoList = ({todos}) => {
    const styles = getStyles(todos);
    return (
      <TransitionMotion
        willLeave={willLeave}
        willEnter={willEnter}
        styles={styles}
      >
        {
          interpolatedStyles =>
          <ul className="todo-list">
            {
              interpolatedStyles.map(config => {
                const {data, style, key} = config;
                
                const item = data;
                // console.log('item '+JSON.stringify(item));
                return (<TodoItem
                  style={style}
                  key={key}
                  id={item.id}
                  text={item.text}
                  completed={item.completed}
                />);
              })
            }
          </ul>
          }
        </TransitionMotion>
    );
  };
  
  TodoList.propTypes = {
    todos: PropTypes.array.isRequired
  };
  
  const mapStateToProps = (state) => {
    return {
      todos: selectVisibleTodos(state)
    };
  }
  
  export default connect(mapStateToProps)(TodoList);