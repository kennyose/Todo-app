import React from 'react';
import ReactDOM from 'react-dom';
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

    this.setState({ value: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    var rtodo = this.refs.todo.props.value;
    if (rtodo.length > 0) {
      return (this.props.setRtodo(rtodo), console.log(this.refs.todo))
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="formValidationSuccess2" validationState={this.getValidationState()}>
            <FormControl ref="todo" value={this.state.value} type="text" placeholder="Add a todo" onChange={this.handleChange} />
            <FormControl.Feedback />
            <Button type="submit" bsStyle="primary">Ok</Button>
          </FormGroup>
        </form>
      </div>
    );
  }
}


module.exports = AddTodo;