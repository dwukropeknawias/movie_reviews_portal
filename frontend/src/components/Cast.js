import React, { Component } from "react";
import {
  Image,
  Header,
  List,
  Segment,
  Container,
  Icon,
  Grid
} from "semantic-ui-react";

import axios from "axios";

import placeholderImg from "./images/placeholder.png";
import quilltest from "./images/plac.jpg";

class Cast extends Component {
  constructor(props) {
    super(props);
    this.state = { actor: {} };
  }

  componentDidMount() {
    axios
      .get(`/api/actors/${this.props.role.actor_id}`)
      .then(response => {
        this.setState({
          actor: response.data
        });
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        <Grid>
          <Grid.Column width={3}>
            <Image src={placeholderImg} size="small" />
          </Grid.Column>
          <Grid.Column width={8} style={{ marginTop: "3.5em" }}>
            {this.state.actor.first_name} {this.state.actor.last_name}
          </Grid.Column>
          <Grid.Column width={3} style={{ marginTop: "3.5em" }}>
            {this.props.role.name}
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Cast;
