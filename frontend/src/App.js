import React, { Component } from "react";

import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import Page404 from "./components/Page404";
import RegistrationPage from "./components/RegistrationPage";
import LoginPage from "./components/LoginPage";
import MoviePage from "./components/MoviePage";
import AccountView from "./components/AccountView";
import AccountPage from "./components/AccountPage";

import PrivateRoute from "./components/PrivateRoute";

import { Provider } from "react-redux";
import store from "./store";

import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "./login";
  }
}

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Provider store={store}>
        <Router>
          <NavBar onChange={this.onChange} />
          <div className="App">
            <Switch>
              <Route exact path="/" component={HomePage} />
              //{" "}
              <PrivateRoute
                exact
                path="/account-view/:Username"
                component={AccountView}
              />
              <Route exact path="/registration" component={RegistrationPage} />
              <Route exact path="/login" component={LoginPage} />
              <PrivateRoute exact path="/account" component={AccountPage} />
              <Route exact path="/movies/:MovieId" component={MoviePage} />
              <Route path="*" component={Page404} />
            </Switch>
          </div>
          <Footer />
        </Router>
      </Provider>
    );
  }
}

export default App;
