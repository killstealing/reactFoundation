import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as Actions from './../Actions';
import { connect } from 'react-redux';

const Link = ({ active, children, onClick }) => {
    if (active) {
        return <b className="filter selected">{children}</b>
    } else {
        return (
            <a href="#" className="filter not-selected" onClick={(ev) => {
                ev.preventDefault();
                onClick();
            }}>
                {children}
            </a>
        );
    }
}

Link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => {
    return {
        active: state.FilterReducer === ownProps.filter
    };
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(Actions.setFilter(ownProps.filter))
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Link)