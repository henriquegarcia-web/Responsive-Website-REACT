import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import GlobalStyle from './globalStyles';
import Home from './pages/Home';
import PricingPage from './pages/PricingPage';
import SignupPage from './pages/SignupPage';

function App() {
  return (
    <Router>
      <GlobalStyle />

      <Switch>
        <Route path='/' exact component={ Home } />
        <Route path='/' exact component={ PricingPage } />
        <Route path='/' exact component={ SignupPage } />
      </Switch>
    </Router>
  );
}

export default App;
