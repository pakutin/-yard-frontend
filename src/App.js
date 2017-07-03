import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Complex from "./Complex";
import "./style.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={Main} />
          <Route exact path="/complex" component={Complex} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
