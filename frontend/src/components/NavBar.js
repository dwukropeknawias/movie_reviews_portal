import React, { Component } from "react";
import { Menu, Image, Dropdown, Input } from "semantic-ui-react";

import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <div>
        <Menu fixed="top" inverted>
          <Menu.Menu>
            <Dropdown
              text="Employees Announcements"
              pointing
              className="link item"
            >
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/">
                  Announcements
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/topics">
                  Topics
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}

export default NavBar;
