import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import List from "./List";
import Header from "./Header";
import Footer from "./Footer";
import Index from "./Show";
import "./style.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={List} />
          <Route exact path="/complex" component={Index} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
