import React from 'react';
import Nav from 'Nav';
import { Route, Router, IndexRoute, hashHistory, Link, IndexLink, location, createHistory } from 'react-router';

export default class Main extends React.Component {
  render() {
    return (
      <div className="main-con">
        <div>
          <Nav pathName={hashHistory.getCurrentLocation().pathname}/>
        </div>
        {this.props.children}
      </div>
    );
  }
}