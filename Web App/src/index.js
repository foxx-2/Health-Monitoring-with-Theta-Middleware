import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header/Header.js'
import ViewPatient from './views/ViewPatient/ViewPatient.js'
import ViewAllPatients from './views/ViewAllPatients/ViewAllPatients.js'
import YourProfile from './views/YourProfile/YourProfile.js'
import HomePage from "./HomePage"

ReactDOM.render(
  <Router>
    <Header />
      <HomePage />
    <Switch>
      <Route path="/viewallpatients" component={ViewAllPatients} />
      <Route path="/yourprofile" component={YourProfile} />
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
