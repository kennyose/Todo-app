import React from 'react';
import * as Redux from 'react-redux';
import * as actions from 'actions';

class Login extends React.Component {
  onLogin = () => {
    var {dispatch} = this.props;

    dispatch(actions.startLogin());
  }

  render () {
    return (
      <div>
        <h1 className="text-center">TODO APP</h1>
        <div className="row login-row" >
          <div className="col-lg-4 col-md-6 col-sm-10 text-center login-col">
            <div className='container-fluid'>
              <h3>Login</h3>
              <p>Login with github account below</p>
              <button className="btn btn-default" onClick={this.onLogin}>Login With GitHub</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Redux.connect()(Login);