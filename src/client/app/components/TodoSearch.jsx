import React from 'react';
import {connect} from 'react-redux';
var actions = require('actions');

import { Button, FormGroup, FormControl, ControlLabel, Checkbox } from 'react-bootstrap';

class TodoSearch extends React.Component {
  render() {
    var {dispatch, searchText, showCompleted} = this.props;
    return (
      <div className="container__header">
        <div>
          <input type="search" placeholder="Search todo" ref='searchText' value={searchText} className="form-control" onChange={() => {
            var searchText = this.refs.searchText.value;
            dispatch(actions.setSearchText(searchText));
          }}/>
        </div>
        <div>
          <label>
            <input type="Checkbox" ref="showCompleted" checked={showCompleted} onChange={() => {
              dispatch(actions.toggleShowCompleted());
            }} />
            <span>  Show completed todo</span>
          </label>
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => {
    return {
      showCompleted: state.showCompleted,
      searchText: state.searchText
    }
  }
)(TodoSearch);