import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import GlobalStyle from './globalStyles';
import Home from './pages/Home';
import PricingPage from './pages/PricingPage';
import SignupPage from './pages/SignupPage';

function App() {
  return (
    <Router>
      <GlobalStyle />

      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/services" exact element={<PricingPage/>} />
        <Route path="/signup" exact element={<SignupPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
