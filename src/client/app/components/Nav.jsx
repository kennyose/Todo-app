import React from 'react';
import { Route, Router, IndexRoute, hashHistory, Link, IndexLink, location, createHistory } from 'react-router';
import * as Redux from 'react-redux';
import * as actions from 'actions';


class Nav extends React.Component {

  onLogout = (e) => {
    var {dispatch} = this.props;
    e.preventDefault();

    dispatch(actions.startLogout());
  }

  render() {
    var {pathName} = this.props
    var renderLog = () => {
      if (pathName === '/') {
        return 'Login';
      } else {
        return 'Logout';
      }
    }

    return (
      <nav className="navbar navbar-default t-nav">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">Brand</a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">

              <li>
                <Link to="/TodoApp" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Todo</Link>
              </li>

            </ul>

            <ul className="nav navbar-nav navbar-right">
              <li>
                <IndexLink to="/" activeClassName="active" activeStyle={{ fontWeight: 'bold' }} onClick={this.onLogout}>{renderLog()}</IndexLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Redux.connect()(Nav);