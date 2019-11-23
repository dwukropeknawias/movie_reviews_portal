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
  Table,
  Item,
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
              style={{ height: "60vh", width: "120vh", marginTop: "5.5em" }}
            >
              <Header textAlign="center" as="h1">
                Movie info
              </Header>
              <Grid>
                <Grid.Row>
                  <Grid.Column width={8}>
                    <Image centered src={this.state.movie.poster} />
                  </Grid.Column>
                  <Grid.Column width={8}>
                    <Table basic="very" celled collapsing>
                      <Table.Body>
                        <Table.Row>
                          <Table.Cell>
                            <Header as="h4">
                              <Header.Content>Title</Header.Content>
                            </Header>
                          </Table.Cell>
                          <Table.Cell>{this.state.movie.title}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>
                            <Header as="h4">
                              <Header.Content>Year</Header.Content>
                            </Header>
                          </Table.Cell>
                          <Table.Cell>{this.state.movie.year}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>
                            <Header as="h4">
                              <Header.Content>Runtime [min]</Header.Content>
                            </Header>
                          </Table.Cell>
                          <Table.Cell>{this.state.movie.runtime}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>
                            <Header as="h4">
                              <Header.Content>Genre</Header.Content>
                            </Header>
                          </Table.Cell>
                          <Table.Cell>{this.state.movie.genre}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>
                            <Header as="h4">
                              <Header.Content>Plot</Header.Content>
                            </Header>
                          </Table.Cell>
                          <Table.Cell>{this.state.movie.plot}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>
                            <Header as="h4">
                              <Header.Content>Awards</Header.Content>
                            </Header>
                          </Table.Cell>
                          <Table.Cell>{this.state.movie.awards}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>
                            <Header as="h4">
                              <Header.Content>Revenue [mln]</Header.Content>
                            </Header>
                          </Table.Cell>
                          <Table.Cell>{this.state.movie.revenue}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>
                            <Header as="h4">
                              <Header.Content>Production</Header.Content>
                            </Header>
                          </Table.Cell>
                          <Table.Cell>{this.state.movie.production}</Table.Cell>
                        </Table.Row>
                      </Table.Body>
                    </Table>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Segment>
          </GridRow>
        </Grid>
      </div>
    );
  }
}

export default MoviePage;
