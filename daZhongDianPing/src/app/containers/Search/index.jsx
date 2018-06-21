import React, { Component } from 'react'
import SearchHeader from '../../components/SearchHeader';
import SearchList from './subpage';

export default class Search extends Component {
  render() {
    console.log('Search ' + JSON.stringify(this.props.params));
    return (
      <div>
        <SearchHeader keyword={this.props.params.keyword}></SearchHeader>
        <SearchList keyword={this.props.params.keyword} 
          category={this.props.params.category}></SearchList>
      </div>
    )
  }
}
