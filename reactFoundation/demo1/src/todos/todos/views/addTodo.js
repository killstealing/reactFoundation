import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as Actions from './../Actions';
import { connect } from 'react-redux';
class AddTodo extends Component {
    constructor() {
        super(...arguments);

        this.onSubmit = this.onSubmit.bind(this);
        this.refInput = this.refInput.bind(this);
    }
    onSubmit(e) {
        e.preventDefault();
        const input = this.input;
        if (!input.value.trim()) {
            return;
        }
        console.log('aaaa');
        this.props.onAdd(input.value);
        input.value = '';
    }
    refInput(node) {
        this.input = node;
    }
    render() {
        return (
            <div className="add-todo">
                <form onSubmit={this.onSubmit}>
                    <input className="new-todo" ref={this.refInput} />
                    <button className="add-btn" type="submit">
                        添加
                    </button>
                </form>
            </div>
        )
    }
}
AddTodo.propTypes = {
    onAdd: PropTypes.func.isRequired
};
const mapDispatchToProps = (dispatch) => {
    return {
        onAdd: (text) => {
            dispatch(Actions.addAction(text));
        }
    };
}

export default connect(null, mapDispatchToProps)(AddTodo)