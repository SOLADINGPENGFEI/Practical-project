import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './views/Main/index';
import LoginPage from './views/Login/index';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/" component={IndexPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
