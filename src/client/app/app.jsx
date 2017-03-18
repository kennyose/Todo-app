import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { hashHistory } from 'react-router';
import firebase from 'firebase';
import RouterX from 'index';


var actions = require('actions');
var store = require('configureStore').configure();

require('bootstrap/dist/js/bootstrap.min.js');
require('bootstrap/less/bootstrap.less');
require('bootstrap/fonts/glyphicons-halflings-regular.svg');
require('bootstrap/fonts/glyphicons-halflings-regular.eot');
require('bootstrap/fonts/glyphicons-halflings-regular.ttf');
require('bootstrap/fonts/glyphicons-halflings-regular.woff');
require('bootstrap/fonts/glyphicons-halflings-regular.woff2');


firebase.auth().onAuthStateChanged((user) => {
  if(user) {
    store.dispatch(actions.login(user.uid));
    store.dispatch(actions.startAddTodos());
    hashHistory.push('/TodoApp');
  } else {
    store.dispatch(actions.logout());
    hashHistory.push('/');
  }
});

// Load foundation
// $(document).foundation();

// App css
require('app');


ReactDOM.render(
  <Provider store={store}>
    {RouterX}
  </Provider>,
  document.getElementById('app')
);