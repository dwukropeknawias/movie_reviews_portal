import React, { Component } from "react";
import axios from "axios";

import {
  Header,
  Grid,
  Segment,
  Feed,
  Image,
  Icon,
  GridColumn,
  GridRow,
  Table,
  Item,
  List
} from "semantic-ui-react";
import { Link } from "react-router-dom";

import "./MoviePage.css";
import Cast from "./Cast";

import Review from "./Review";

class MoviePage extends Component {
  constructor(props) {
    super(props);
    this.state = { movie: {}, director: {}, roles: [], reviews: [] };
  }

  getAllReviews = () => {
    const {
      match: { params }
    } = this.props;
    axios
      .get(`/api/reviews/movie/${params.MovieId}`)
      .then(response => {
        this.setState({ reviews: response.data });
        console.log(this.state.reviews);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  reviewDelete = id => {
    this.setState({
      reviews: this.state.reviews.filter(function(review) {
        return review._id !== id;
      })
    });
  };

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
        this.getAllReviews(this.reviews);
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });

    axios
      .get(`/api/roles/movie/${params.MovieId}`)
      .then(response => {
        this.setState({
          roles: response.data
        });
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });

    axios
      .get(`/api/directors/1`)
      .then(response => {
        this.setState({
          director: response.data
        });
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  rolesList = e => {
    return this.state.roles.map(function(currentRole, i) {
      return <Cast role={currentRole} key={i} />;
    });
  };

  reviewList() {
    let self = this;
    return this.state.reviews.map(function(currentReview, i) {
      return (
        <Review
          reviewDelete={self.reviewDelete}
          review={currentReview}
          key={i}
        />
      );
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
                    <Image
                      style={{
                        marginTop: "5.5em",
                        border: "2px solid black",
                        width: "182px",
                        height: "268px",
                        boxShadow: "0 8px 6px -6px black"
                      }}
                      centered
                      src={this.state.movie.poster}
                    />

                    <Grid
                      centered
                      style={{
                        paddingTop: "2.5em"
                      }}
                    >
                      <Grid.Column width={2}>
                        <Icon centered name="star" size="huge" color="yellow" />
                      </Grid.Column>
                      <Grid.Column>
                        <Header
                          style={{
                            paddingTop: "0.25em",
                            fontSize: "45px"
                          }}
                          size="huge"
                        >
                          8.1
                        </Header>
                      </Grid.Column>
                    </Grid>
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
                        <Table.Row>
                          <Table.Cell>
                            <Header as="h4">
                              <Header.Content>Director</Header.Content>
                            </Header>
                          </Table.Cell>
                          <Table.Cell>
                            {this.state.director.first_name}{" "}
                            {this.state.director.last_name}
                          </Table.Cell>
                        </Table.Row>
                      </Table.Body>
                    </Table>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Segment>
          </GridRow>
          <Segment style={{ width: "80vh", marginTop: "2.5em" }}>
            <Header textAlign="left" as="h1">
              Cast
            </Header>
            <div>{this.rolesList()}</div>
          </Segment>
        </Grid>

        <div className="reviewList">
          {" "}
          <h1 align="center"> Reviews</h1> {this.reviewList()}
        </div>
      </div>
    );
  }
}

export default MoviePage;
