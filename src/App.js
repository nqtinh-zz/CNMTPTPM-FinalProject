import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import DefaultLayout from './components/DefaultLayout.js';
import Login from './components/User/login';
import Register from './components/User/register';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/login" name="Login" component={Login} />
          <Route path="/register" name="Register" component={Register} />
          <Route path="/" name="Home" component={DefaultLayout} />
        </Switch>
      </HashRouter>
    ); 
  }
}

export default App;
