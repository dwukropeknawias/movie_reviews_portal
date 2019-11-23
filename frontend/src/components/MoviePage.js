import React, { Component } from "react";
import axios from "axios";

import {
  Header,
  Grid,
  Segment,
  Feed,
  Image,
  GridColumn,
  GridRow,
  List
} from "semantic-ui-react";
import { Link } from "react-router-dom";

import "./MoviePage.css";

class MoviePage extends Component {
  constructor(props) {
    super(props);
    this.state = { movie: {} };
  }

  componentDidMount() {
    const {
      match: { params }
    } = this.props;

    axios
      .get(`/api/movies/${params.MovieId}`)
      .then(response => {
        this.setState({
          movie: response.data
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
        <Grid textAlign="center">
          <GridRow>
            <Segment
              style={{ height: "40vh", width: "120vh", marginTop: "5.5em" }}
            >
              <Header as="h1">Movie info</Header>
              <Grid columns="4">
                <GridColumn width="6" />
                <img
                  src={this.state.movie.poster}
                  style={({ marginTop: "15.5em" }, { maxHeight: "200px" })}
                />

                <GridColumn width="3" textAlign="left">
                  <List size="massive">
                    <List.Item content={"Title: "} />
                    <List.Item content={"Year: "} />
                    <List.Item content={"Runtime [min]: "} />
                    <List.Item content={"Genre: "} />
                    <List.Item content={"Plot: "} />
                    <List.Item content={"Awards: "} />
                    <List.Item content={"Revenue [mln]: "} />
                    <List.Item content={"Production: "} />
                  </List>
                </GridColumn>
                <GridColumn textAlign="left">
                  <List size="massive">
                    <List.Item content={this.state.movie.title} />
                    <List.Item content={this.state.movie.year} />
                    <List.Item content={this.state.movie.runtime} />
                    <List.Item content={this.state.movie.genre} />
                    <List.Item content={this.state.movie.plot} />
                    <List.Item content={this.state.movie.awards} />
                    <List.Item content={this.state.movie.revenue} />
                    <List.Item content={this.state.movie.production} />
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

export default MoviePage;
