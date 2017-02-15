var $ = require('jquery');

module.exports = {
  filterTodos: function (todos, showCompleted, searchText) {
    var filteredTodos = todos;

    // Filter by showCompleted
    filteredTodos = filteredTodos.filter((todo) => {
      return !todo.completed || showCompleted;
    });

    // Filter by searchText
    filteredTodos = filteredTodos.filter((todo) => {
      return searchText.length === 0 || todo.text.toLowerCase().indexOf(searchText) > -1;
    });

    // Sort todos with non-completed first
    filteredTodos.sort((a, b) => {
      if (!a.completed && b.completed) {
        return -1;
      } else if (a.completed && !b.completed) {
        return 1;
      } else {
        return 0;
      }
    });

    //Sort todos with createdAt order
    filteredTodos.sort((a, b) => {
      if (!a.completed && !b.completed) {
        if (a.createdAt > b.createdAt) {
          return -1;
        } else if (b.createdAt > a.createdAt) {
          return 1;
        } else {
          return 0;
        }
      }
    });

    //Sort todos with createdAt order
    filteredTodos.sort((a, b) => {
      if (a.completed && b.completed) {
        if (a.completedAt > b.completedAt) {
          return -1;
        } else if (b.completedAt > a.completedAt) {
          return 1;
        } else {
          return 0;
        }
      }
    });

    return filteredTodos;
  }
};