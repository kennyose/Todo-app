import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { searchTextReducer, showCompletedReducer, todosReducer } from 'reducers';
import thunk from 'redux-thunk';

export var configure = () => {
  var reducer = combineReducers({
    searchText: searchTextReducer,
    showCompleted: showCompletedReducer,
    todos: todosReducer
  });

  // Create a store for the reducer
  //--------------------
  var store = createStore(reducer, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())); // Requires a reducer as its 1 argument

  return store
}