import React from 'react';
import Nav from 'Nav';
import { Route, Router, IndexRoute, hashHistory, Link, IndexLink, location, createHistory } from 'react-router';

export default class Main extends React.Component {
  render() {
    // var renderLog = () => {

    //   if (hashHistory.getCurrentLocation().pathname === '/') {
    //     console.log(hashHistory.getCurrentLocation().pathname);
    //     var pathName = hashHistory.getCurrentLocation().pathname;
    //     return (this.props = pathName);
    //   } else {
    //     console.log(hashHistory.getCurrentLocation().pathname);
    //     return (this.props = pathName);
    //   }
    // }
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