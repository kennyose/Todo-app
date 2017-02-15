import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { hashHistory } from 'react-router';
import firebase from 'firebase';
import router from 'index';

var actions = require('actions');
var store = require('configureStore').configure();

require('bootstrap/less/bootstrap.less');
require('bootstrap/fonts/glyphicons-halflings-regular.svg');
require('bootstrap/fonts/glyphicons-halflings-regular.eot');
require('bootstrap/fonts/glyphicons-halflings-regular.ttf');
require('bootstrap/fonts/glyphicons-halflings-regular.woff');
require('bootstrap/fonts/glyphicons-halflings-regular.woff2');


firebase.auth().onAuthStateChanged((user) => {
  if(user) {
    hashHistory.push('/TodoApp');
  } else {
    hashHistory.push('/');
  }
});

store.dispatch(actions.startAddTodos());

// Load foundation
// $(document).foundation();

// App css
require('app');


ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>,
  document.getElementById('app')
);