/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../src/style/Styles.css';
import ClaimView from './claim-view/claimView.component';
import ClaimUpdate from './claim-update/claimUpdate.component';
import Login from './login/login.component';
import '../src/style/Styles.css';
import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

const routing = (
  <Router>
    <switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/view" component={ClaimView} />
      <Route exact path="/update" component={ClaimUpdate} />
    </switch>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'))
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
