import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as Actions from './../Actions';
import { connect } from 'react-redux';
class AddTodo extends Component {
    constructor() {
        super(...arguments);
        this.state={
            value:''
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onInputChange=this.onInputChange.bind(this);
    }
    onSubmit(e) {
        e.preventDefault();
        const input = this.state.value;
        if (!input.trim()) {
            return;
        }
        console.log('aaaa');
        this.props.onAdd(input);
        this.setState({value:''});
    }
    onInputChange(event){
        this.setState({
            value:event.target.value
        });
    }
    render() {
        return (
            <div className="add-todo">
                <form onSubmit={this.onSubmit}>
                    <input className="new-todo" onChange={this.onInputChange}
                    value={this.state.value} />
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