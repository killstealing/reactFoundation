import React, { Component } from 'react'
import PropTypes from 'prop-types'


class AddUserProp extends Component{
    render() {
        return this.props.children(this.props.user);
    }
}

AddUserProp.propTypes={
    children:PropTypes.func.isRequired
};
export default AddUserProp;