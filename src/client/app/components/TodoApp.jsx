import React from 'react';
import uuid from 'node-uuid';

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';
import TodoAPI from 'TodoAPI';

import { Grid, Row, Col, Clearfix, Jumbotron } from 'react-bootstrap';

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.state = {
      showCompleted: false,
      searchText: '',
      todos: TodoAPI.getTodos()
    };
  }

  componentDidUpdate() {
    TodoAPI.setTodos(this.state.todos);
  }

  handleAddTodo(text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: text,
          completed: false
        }
      ]
    });
  }

  handleSearch(showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    })
  }

  handleToggle(id) {
    var updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }

      return todo;
    });

    this.setState({
      todos: updatedTodos
    });
  }

  render() {
    var {todos, showCompleted, searchText} = this.state;
    var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

    return (
      <div>
        <Grid>
          <Jumbotron>
            <h1>Todo App</h1>
          </Jumbotron>
          <Col sm={4} md={4}></Col>
          <Col sm={4} md={4}>
            <TodoSearch onSearch={this.handleSearch} />
            <TodoList todos={filteredTodos} onToggle={this.handleToggle} />
            <AddTodo setRtodo={this.handleAddTodo} />
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