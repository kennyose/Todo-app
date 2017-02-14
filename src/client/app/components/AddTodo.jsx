import React from 'react';
import {connect} from 'react-redux';
var actions = require('actions');
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

// this.refs.todo.props.value

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      value: ''
    }
  }

  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) {
      return 'success'
    } else if (length > 5) {
      return 'warning'
    } else if (length > 0) {
      return 'error'
    }
  }

  handleChange(e) {
    e.preventDefault();

    this.setState({ value: this.refs.todo.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    var {dispatch} = this.props;
    var rtodo = this.refs.todo.value;

    if (rtodo.length > 0) {
      this.refs.todo.value = "";
      this.setState({value: ''});
      dispatch(actions.startAddTodo(rtodo));
    } else {
      this.refs.todo.focus();
    }
  }

  render() {
    return (
      <div className="container__footer">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="formValidationSuccess2" validationState={this.getValidationState()}>
            <input ref="todo" type="text" className="form-control" placeholder="What would you like to do?" onChange={this.handleChange} />
            <FormControl.Feedback />
            <button type="submit" className="btn btn-primary btn-block" style={{marginTop: '10px'}}>Ok</button>
          </FormGroup>
        </form>
      </div>
    );
  }
}


export default connect()(AddTodo);