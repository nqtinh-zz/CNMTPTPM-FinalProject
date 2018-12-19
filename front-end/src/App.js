import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DefaultLayout from './components/Layout/DefaultLayout';
import { Provider } from 'react-redux';
import Login from './components/User/login';
import Register from './components/User/register';
import PrivateRoute from './components/PrivateRoute';
import jwt_decode from 'jwt-decode';
import setAuthToken from './config/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/User/authAction';
import store from './store/configStore';
if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    // store.dispatch(clearCurrentProfile());
    window.location.href = '/login';
  }
}
class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Router>
        <div className="App">
        <Route path="/register" name="Register" component={Register} />
        <Route path="/login" name="Login" component={Login} />
        <Switch>
          <PrivateRoute path="/" name="Home" component={DefaultLayout} />
        </Switch>
        <Switch>
          <PrivateRoute exact path="/tweets" component={DefaultLayout} />
        </Switch>
        </div>
      </Router>
      </Provider>
    );
  }
}

export default App;
