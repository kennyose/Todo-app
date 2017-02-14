import React from 'react';

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';

import { Grid, Row, Col, Clearfix, Jumbotron } from 'react-bootstrap';

let {Component, PropTypes} = React;

export default class TodoApp extends Component {
  render() {
    return (
      <div >
        <Grid>
          <Jumbotron>
            <h1 className="text-center">Todo App</h1>
          </Jumbotron>
          <Col sm={3} md={3}></Col>
          <div className="col-sm-6 col-md-6 container__main">
            <TodoSearch />
            <TodoList />
            <AddTodo />
          </div>
          <Col sm={3} md={3}></Col>
        </Grid>
      </div>
    );
  }
}
