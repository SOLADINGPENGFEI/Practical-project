import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import LoginPage from './views/Login/index';
import Main from './views/Section/Main/index';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
       
        <Route path="/main" exact component={Main} />
        <Route path="/" exact component={LoginPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
