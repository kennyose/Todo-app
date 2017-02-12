import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';

require('bootstrap/less/bootstrap.less');
require('bootstrap/fonts/glyphicons-halflings-regular.svg');
require('bootstrap/fonts/glyphicons-halflings-regular.eot');
require('bootstrap/fonts/glyphicons-halflings-regular.ttf');
require('bootstrap/fonts/glyphicons-halflings-regular.woff');
require('bootstrap/fonts/glyphicons-halflings-regular.woff2');


import TodoApp from 'TodoApp';
import TodoApi from 'TodoAPI';

var actions = require('actions');
// import store from 'configureStore';
var store = require('configureStore').configure();

var unsubscribe = store.subscribe(() => {
  var state = store.getState();
  console.log('New state: ', state);
  TodoApi.setTodos(state.todos)
});

var initialTodos = TodoApi.getTodos();
store.dispatch(actions.addTodos(initialTodos));

// Load foundation
// $(document).foundation();

// App css
require('app')

ReactDOM.render(
  <Provider store= {store}>
    <TodoApp/>
  </Provider>,
  document.getElementById('app')
);