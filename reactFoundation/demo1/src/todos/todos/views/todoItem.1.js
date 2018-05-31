import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import * as Actions from './../Actions';

class TodoItem extends Component {
    constructor() {
        super(...arguments);

        console.log('enter TodoItem constructor: ' + this.props.text);
    }
    render() {
        const { id, onToggle, onRemove, completed, text } = this.props;

        console.log('enter TodoItem render: ' + text);
        const checkedProp = completed ? { checked: true } : {};
        return (
            <li className="todo-item" style={{ textDecoration: completed ? 'line-through' : 'none' }}>
                <input className="toggle" type="checkbox" {...checkedProp} readOnly
                    onClick={() => onToggle(id)} />
                <label>{text}</label>
                <button onClick={() => onRemove(id)}>X</button>
            </li>
        );
    }
}

TodoItem.propTypes = {
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onToggle: (id) => {
            dispatch(Actions.toggleAction(id));
        },
        onRemove: (id) => {
            dispatch(Actions.delAction(id));
        }
    };
}

export default connect(null, mapDispatchToProps)(TodoItem)