import React, { Component } from "react";

import { Header, Button, Segment, Grid } from "semantic-ui-react";

import { Link } from "react-router-dom";

class Page404 extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Grid.Column width={3} />
          <Grid.Column>
            <Segment
              style={{ height: "30vh", width: "120vh", marginTop: "15.5em" }}
            >
              <Header
                style={{ paddingTop: "2em" }}
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
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Page404;
