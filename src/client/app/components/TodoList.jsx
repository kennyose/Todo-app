import React from 'react';
import Todo from 'Todo';

class TodoList extends React.Component {
  render() {
    var todos = this.props.todos;
    var renderTodos = () => {
      return todos.map((todo) => {
        return (
          <div>
            <Todo key={todo.id} {...todo} />
            
          </div>

        )
      })
    };

    return (
      <div>
        {renderTodos()}
        
      </div>
    );
  }
}

module.exports = TodoList;