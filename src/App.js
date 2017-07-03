import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./Main";
import Complex from "./Complex";
import "./style.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Main} />
          <Route exact path="/complex" component={Complex} />
        </div>
      </Router>
    );
  }
}

export default App;
