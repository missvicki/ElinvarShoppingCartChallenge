import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../Views/layout/Home'

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
