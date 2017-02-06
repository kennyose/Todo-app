import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

require('bootstrap/less/bootstrap.less');
require('bootstrap/fonts/glyphicons-halflings-regular.svg');
require('bootstrap/fonts/glyphicons-halflings-regular.eot');
require('bootstrap/fonts/glyphicons-halflings-regular.ttf');
require('bootstrap/fonts/glyphicons-halflings-regular.woff');
require('bootstrap/fonts/glyphicons-halflings-regular.woff2');


import TodoApp from 'TodoApp';

// Load foundation
// $(document).foundation();

// App css


ReactDOM.render(
  <TodoApp/>,
  document.getElementById('app')
);
