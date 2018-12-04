import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DefaultLayout from './components/Layout/DefaultLayout';
import Login from './components/User/login';
import Register from './components/User/register';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login" name="Login" component={Login} />
          <Route path="/register" name="Register" component={Register} />
          <Route path="/" name="Home" component={DefaultLayout} />
        </Switch>
      </Router>
    ); 
  }
}

export default App;
