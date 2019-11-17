import React, { Component } from "react";

import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import Page404 from "./components/Page404";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router>
        <NavBar />
        <div className="App">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/registration" component={Page404} />
            <Route path="*" component={Page404} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
