import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './views/IndexPage';
import Main from './components/Main/index';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
       
        <Route path="/main" exact component={Main} />
        <Route path="/" exact component={IndexPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
