import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import Main from 'Main';
import TodoApp from 'TodoApp';
import Login from 'Login';
import Nav from 'Nav';

import firebase from 'firebase';  

var requireLogin = (nextState, replace, next) => {
  if (!firebase.auth().currentUser) {
    replace('/');
  }
  next();
};

var isLoggedin = (nextState, replace, next) => {
  if (firebase.auth().currentUser) {
    replace('/TodoApp');
  }
  next();
};

export default (
   <Router history={hashHistory}>
      <Route  path="/" component={Main}>
        <Route path="TodoApp" component={TodoApp} onEnter={requireLogin}/>
        <IndexRoute component={Login} onEnter={isLoggedin}/>
      </Route>
    </Router>
);