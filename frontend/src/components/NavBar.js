import React, { Component } from "react";
import { Menu, Image, Dropdown, Input } from "semantic-ui-react";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";

import { Link } from "react-router-dom";

class NavBar extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  render() {
    const { user } = this.props.auth;
    var acc = new String(user.username);
    return (
      <div>
        <Menu fixed="top" inverted>
          <Menu.Menu>
            <Dropdown
              text="Movies Review Portal"
              pointing
              className="link item"
            >
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/">
                  Home
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/movies">
                  Movies
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Menu>
          <Menu.Menu position="right">
            {this.props.auth.isAuthenticated ? (
              <>
                <Dropdown text={user.username} pointing className="link item">
                  <Dropdown.Menu>
                    <Dropdown.Item as={Link} to={"/account-view/" + acc}>
                      Your Profile
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} to="/account">
                      Account Settings
                    </Dropdown.Item>
                    <Dropdown.Item onClick={this.onLogoutClick}>
                      Logout
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </>
            ) : (
              <>
                <Menu.Item as={Link} to="/registration">
                  Registration
                </Menu.Item>
                <Menu.Item as={Link} to="/login">
                  Login
                </Menu.Item>
              </>
            )}
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}

NavBar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(NavBar);
