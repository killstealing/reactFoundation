import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import * as Actions from './../Actions';



class TodoItem extends React.Component {
    constructor() {
      super(...arguments);
  
      console.log('enter TodoItem constructor: ' + this.props.text);
    }
  
    render() {
      const {style, onToggle, onRemove, completed, text } = this.props;
  
      console.log('enter TodoItem render: ' + text);
  
      return (
        <li className="todo-item"
          style={{
            ...style,
            textDecoration: completed ? 'line-through' : 'none'
          }}
        >
          <input className="toggle" type="checkbox" checked={completed ? "checked" : ""} readOnly onClick={onToggle} />
          <label className="text">{text}</label>
          <button className="remove" onClick={onRemove}>×</button>
        </li>
      );
    };
  }
  
  TodoItem.propTypes = {
    onToggle: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    style: PropTypes.object.isRequired,
    text: PropTypes.string.isRequired
  }
  
  const mapDispatchToProps = (dispatch, ownProps) => {
    const {id} = ownProps;
    return {
      onToggle: () => dispatch(toggleTodo(id)),
      onRemove: () => dispatch(removeTodo(id))
    }
  };
  
  export default connect(null, mapDispatchToProps)(TodoItem);
  
  