import React, { Component } from "react";
import axios from "axios";

import {
  List,
  Header,
  Grid,
  GridRow,
  Segment,
  GridColumn
} from "semantic-ui-react";

class AccountView extends Component {
  constructor(props) {
    super(props);
    this.state = { user: {} };
  }

  componentDidMount() {
    const {
      match: { params }
    } = this.props;

    axios
      .get(`/api/users/acc/${params.Username}`)
      .then(response => {
        this.setState({ user: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <Grid textAlign="center" style={{ paddingTop: "15.5em" }}>
          <GridRow>
            <Segment style={{ height: "30vh", width: "120vh" }}>
              <Header as="h1">User info</Header>
              <Grid columns="4">
                <GridColumn width="6">
                  <img
                    alt="avatar"
                    src={this.state.user.avatar}
                    style={{
                      maxHeight: "200px",
                      border: "2px solid black",
                      boxShadow: "0 8px 6px -6px black"
                    }}
                  />
                </GridColumn>
                <GridColumn width="1">
                  <List size="massive">
                    <List.Item icon="user circle" />
                    <List.Item icon="user" />
                    <List.Item icon="user" />
                    <List.Item icon="mail" />
                  </List>
                </GridColumn>
                <GridColumn width="3" textAlign="left">
                  <List size="massive">
                    <List.Item content={"Username: "} />
                    <List.Item content={"First Name: "} />
                    <List.Item content={"Last Name: "} />
                    <List.Item content={"Email: "} />
                  </List>
                </GridColumn>
                <GridColumn textAlign="left">
                  <List size="massive">
                    <List.Item content={this.state.user.username} />
                    <List.Item content={this.state.user.first_name} />
                    <List.Item content={this.state.user.last_name} />
                    <List.Item content={this.state.user.email} />
                  </List>
                </GridColumn>
              </Grid>
            </Segment>
          </GridRow>
        </Grid>
      </div>
    );
  }
}

export default AccountView;
