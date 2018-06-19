import React, { Component } from 'react'
import SearchHeader from '../../components/SearchHeader';

export default class Search extends Component {
  render() {
    console.log('Search '+JSON.stringify(this.props.params));
    return (
      <div>
        <SearchHeader keyword={this.props.params.keyword}></SearchHeader>
      </div>
    )
  }
}
