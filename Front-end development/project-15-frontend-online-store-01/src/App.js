import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import * as pages from './pages';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={pages.Main} />
          <Route path="/cart" component={pages.Cart} />
          <Route path="/details/" component={pages.Details} />
          <Route path="/checkout" component={pages.Checkout} />
          <Route component={pages.NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
