import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import GlobalStyle from './globalStyles';
import Home from './pages/Home';
import PricingPage from './pages/PricingPage';
import SignupPage from './pages/SignupPage';

import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <Router>
      <GlobalStyle />

      <Navbar />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/services" exact component={PricingPage} />
        <Route path="/signup" exact component={SignupPage} />
      </Switch>
    </Router>
  );
}

export default App;
