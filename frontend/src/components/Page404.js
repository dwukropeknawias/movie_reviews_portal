import React, { Component } from "react";

import { Header, Button, Segment } from "semantic-ui-react";

import { Link } from "react-router-dom";

class Page404 extends Component {
  render() {
    return (
      <div>
        <Header
          style={{ paddingTop: "10em" }}
          textAlign="center"
          as="h1"
          size="huge"
        >
          404
        </Header>
        <Header textAlign="center" as="h1" size="huge">
          Page Not Found
        </Header>
        <Header textAlign="center" as="h1" size="huge">
          <Button circular color="orange" size="huge" as={Link} to="/">
            Home
          </Button>
        </Header>
      </div>
    );
  }
}

export default Page404;
