import React from 'react';
import DefaultLayout from './components/Layout/DefaultLayout';

const Following = React.lazy(() => import('./views/Following'));
const Tweets = React.lazy(() => import('./views/Tweets'));
const Payment = React.lazy(() => import('./views/Payment'));
const EditProfile = React.lazy(() => import('./views/EditProfile'));
const Account = React.lazy(() => import('./views/Account'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home', component: DefaultLayout },
  { path: '/following', name: 'Following', component: Following },
  { path: '/tweets', name: 'Tweets', component: Tweets },
  { path: '/payment', name: 'Payment', component: Payment },
  { path: '/editprofile', name: 'EditProfile', component: EditProfile },
  { path: '/account', name: 'Account', component: Account },
];

export default routes;
