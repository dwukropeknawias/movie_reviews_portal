import React, { Component } from "react";
import { Image, List, Segment, Container } from "semantic-ui-react";

class Footer extends Component {
  render() {
    return (
      <div>
        <Segment inverted attached>
          <Container textAlign="center">
            <div>Movies Review Portal</div>

            <List horizontal inverted divided link size="small">
              <List.Item as="a"> Dawid Białek</List.Item>
              <List.Item as="a">App for Thesis</List.Item>
              <List.Item as="a">TIN, W4, PWR </List.Item>
              <List.Item as="a">Poland 2019</List.Item>
            </List>
          </Container>
        </Segment>
      </div>
    );
  }
}

export default Footer;
