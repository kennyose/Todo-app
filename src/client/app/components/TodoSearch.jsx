import React from 'react';

import { Button, FormGroup, FormControl, ControlLabel, Checkbox } from 'react-bootstrap';

class TodoSearch extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch() {
    var showCompleted = this.refs.showCompleted.checked;
    var searchText = this.refs.searchText.value;
    
    this.props.onSearch(showCompleted, searchText);
  }

  render() {
    return (
      <div>
        <div>
          <input type="search"  placeholder="Search todo" ref='searchText' onChange={this.handleSearch} className="form-control"/>
        </div>
        <div>
          <label>
          <input type="Checkbox" ref="showCompleted" onChange={this.handleSearch}/>
            <span>  Show completed todo</span>
          </label>
        </div>
      </div>
    );
  }
}

module.exports = TodoSearch;