import React from 'react';
import { connect } from 'react-redux';
import Todo from 'Todo';
import TodoAPI from 'TodoAPI';

class TodoList extends React.Component {
  render() {
    var {showCompleted, searchText, todos} = this.props;
    var renderTodos = () => {
      if (todos.length === 0) {
        return (
          <p className="container__message">Nothing to do</p>
        );
      }
      return TodoAPI.filterTodos(todos, showCompleted, searchText).map((todo) => {
        return (
          <div>
            <Todo key={todo.id} {...todo} />
          </div>
        );
      });
    };

    return (
      <div>
        {renderTodos()}
      </div>
    );
  };
};

export default connect(
  (state) => {
    return state;
  })(TodoList);