import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

import { signup, login, logout } from './actions/session_actions';
import { receiveCurrentUser, receiveErrors } from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  // testing
  // window.store = configureStore();
  // window.signup = signup;
  // window.login = login;
  // window.logout = logout;
  //
  // window.receiveCurrentUser = receiveCurrentUser;
  // window.receiveErrors = receiveErrors;

  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store } />, root);
});
