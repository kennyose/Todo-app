import React from 'react';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';

import { Grid, Row, Col, Clearfix, Jumbotron } from 'react-bootstrap';

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.state = {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        }, {
          id: 2,
          text: 'Clean the yard'
        }
      ]
    };
  }

  handleAddTodo(text) {
    alert('new todo:  ' + text);
  }

  handleSearch(showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    })
  }

  render() {
    var {todos} = this.state;
    return (
      <div>
        <Grid>
          <Jumbotron>
            <h1>Todo App</h1>
          </Jumbotron>
          <Col sm={4} md={4}></Col>
          <Col sm={4} md={4}> 
            <TodoSearch onSearch={this.handleSearch}/>
            <TodoList todos={todos}/>
            <AddTodo setRtodo={this.handleAddTodo}/>
          </Col>
          <Col sm={4} md={4}></Col>
        </Grid>
      </div>
    );
  }
}

/*TodoApp.defaultProps = {
  todos: [
    {
      id: 1,
      text: 'Walk the dog'
    }, {
      id: 2,
      text: 'Clean the yard'
    }
  ]
};*/

module.exports = TodoApp;