import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../Views/layout/Home';
import NotFound from '../Views/NotFound/404';
import Cart from '../Views/Cart';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/orders">
          <Cart />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
