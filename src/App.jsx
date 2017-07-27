// @flow

import React from 'react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Complexes from './Complexes/List';
import Complex from './Complexes/Show';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Redirect from="/" to="/complexes" />
        <Route exact path="/complexes" component={Complexes} />
        <Route exact path="/complexes/:id" component={Complex} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
