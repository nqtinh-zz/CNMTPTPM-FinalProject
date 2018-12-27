import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch , Redirect} from 'react-router-dom';
import DefaultLayout from './components/Layout/DefaultLayout';
import { Provider } from 'react-redux';
import Login from './components/User/login';
import Register from './components/User/register';
import PrivateRoute from './components/PrivateRoute';
import jwt_decode from 'jwt-decode';
import setAuthToken from './config/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/User/authAction';
import store from './store/configStore';
import Header from './components/Layout/Header'
import Personal from './components/PersonalPage/Personal';
import Tweets from './views/Tweets'
import EditProfile from './views/EditProfile';
import Payment from './views/Payment';
import HistoryPayment from './views/HistoryPayment';
import Newfeed from './components/Newfeed/Newfeed';
import Account from './views/Account';
import Following from './views/Following';
import Search from './components/Search/search';
import Search2 from './components/Search/search2';


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
        <Header />
        <Route exact path="/register" name="Register" component={Register} />
        <Route  exact path="/login" name="Login" component={Login} />
        {/* <Switch>
          <PrivateRoute exact path="/personal" name="Others" component={Personal} />
        </Switch> */}
        <Switch>
          <PrivateRoute exact path="/payment" name="Payment" component={Payment} />
        </Switch>
        <Switch>
          <PrivateRoute exact path="/account" name="Account" component={Account} />
        </Switch>
        <Switch>
          <PrivateRoute exact path="/editprofile" name="EditProfile" component={EditProfile} />
        </Switch>
        <Switch>
          <PrivateRoute exact path="/following" name="Following" component={Following} />
        </Switch>
        <Switch>
          <PrivateRoute exact path="/tweets" name="Tweets" component={Tweets} />
        </Switch>
        <Switch>
          <PrivateRoute exact path="/" name="Tweets" component={Tweets} />
        </Switch>
        <Switch>
          <PrivateRoute exact path="/newfeed" name="Newfeed" component={Newfeed} />
        </Switch>
        <Switch>
          <PrivateRoute exact path="/search" name="Newfeed" component={Search} />
        </Switch>
        <Switch>
          <PrivateRoute exact path="/historyPayment" name="Newfeed" component={HistoryPayment} />
        </Switch>
        <Switch>
          <PrivateRoute exact path="/search2" name="trangcanhan" component={Search2} />
        </Switch>
        </div>
      </Router>
      </Provider>
    );
  }
}

export default App;
