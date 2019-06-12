import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './views/IndexPage';
import LoginPage from './views/Login/index';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/login" component={LoginPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
