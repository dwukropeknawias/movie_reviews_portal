import React, { Component } from "react";
import { Image, Grid, Segment, Header } from "semantic-ui-react";
import homePageLogo from "./images/HomePageLogo.png";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";

import axios from "axios";

import { Link } from "react-router-dom";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie1: {},
      movie2: {},
      movie3: {},
      movie4: {},
      movie5: {},
      movie6: {},
      movie7: {},
      movie8: {},
      movie9: {},
      movie10: {}
    };
  }
  getMovie1 = () => {
    axios
      .get("/api/movies/1")
      .then(response => {
        this.setState({ movie1: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  getMovie2 = () => {
    axios
      .get("/api/movies/2")
      .then(response => {
        this.setState({ movie2: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  getMovie3 = () => {
    axios
      .get("/api/movies/3")
      .then(response => {
        this.setState({ movie3: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  getMovie4 = () => {
    axios
      .get("/api/movies/4")
      .then(response => {
        this.setState({ movie4: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  getMovie5 = () => {
    axios
      .get("/api/movies/5")
      .then(response => {
        this.setState({ movie5: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  getMovie6 = () => {
    axios
      .get("/api/movies/6")
      .then(response => {
        this.setState({ movie6: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  getMovie7 = () => {
    axios
      .get("/api/movies/7")
      .then(response => {
        this.setState({ movie7: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  getMovie8 = () => {
    axios
      .get("/api/movies/8")
      .then(response => {
        this.setState({ movie8: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  getMovie9 = () => {
    axios
      .get("/api/movies/9")
      .then(response => {
        this.setState({ movie9: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  getMovie10 = () => {
    axios
      .get("/api/movies/10")
      .then(response => {
        this.setState({ movie10: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  componentDidMount() {
    this.getMovie1(this.movie1);
    this.getMovie2(this.movie2);
    this.getMovie3(this.movie3);
    this.getMovie4(this.movie4);
    this.getMovie5(this.movie5);
    this.getMovie6(this.movie6);
    this.getMovie7(this.movie7);
    this.getMovie8(this.movie8);
    this.getMovie9(this.movie9);
    this.getMovie10(this.movie10);
  }
  render() {
    return (
      <div>
        <Image centered src={homePageLogo} />
        <div>
          <Grid columns={5} divided>
            <Grid.Row>
              <Grid.Column>
                <Header textAlign="center">
                  <b>{this.state.movie1.title}</b>
                </Header>
                <Link to={"/movies/1"}>
                  <Image
                    style={{
                      border: "2px solid black",
                      boxShadow: "0 8px 6px -6px black"
                    }}
                    centered
                    src={this.state.movie1.poster}
                  />
                </Link>
              </Grid.Column>
              <Grid.Column>
                <Header textAlign="center">
                  <b>{this.state.movie2.title}</b>
                </Header>
                <Link to={"/movies/2"}>
                  <Image
                    style={{
                      border: "2px solid black",
                      boxShadow: "0 8px 6px -6px black"
                    }}
                    centered
                    src={this.state.movie2.poster}
                  />
                </Link>
              </Grid.Column>
              <Grid.Column>
                <Header textAlign="center">
                  <b>{this.state.movie3.title}</b>
                </Header>
                <Link to={"/movies/3"}>
                  <Image
                    style={{
                      border: "2px solid black",
                      boxShadow: "0 8px 6px -6px black"
                    }}
                    centered
                    src={this.state.movie3.poster}
                  />
                </Link>
              </Grid.Column>
              <Grid.Column>
                <Header textAlign="center">
                  <b>{this.state.movie4.title}</b>
                </Header>
                <Link to={"/movies/4"}>
                  <Image
                    style={{
                      border: "2px solid black",
                      boxShadow: "0 8px 6px -6px black"
                    }}
                    centered
                    src={this.state.movie4.poster}
                  />
                </Link>
              </Grid.Column>
              <Grid.Column>
                <Header textAlign="center">
                  <b>{this.state.movie5.title}</b>
                </Header>
                <Link to={"/movies/5"}>
                  <Image
                    style={{
                      border: "2px solid black",
                      boxShadow: "0 8px 6px -6px black"
                    }}
                    centered
                    src={this.state.movie5.poster}
                  />
                </Link>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column>
                <Header textAlign="center">
                  <b>{this.state.movie6.title}</b>
                </Header>
                <Link to={"/movies/6"}>
                  <Image
                    style={{
                      border: "2px solid black",
                      boxShadow: "0 8px 6px -6px black"
                    }}
                    centered
                    src={this.state.movie6.poster}
                  />
                </Link>
              </Grid.Column>
              <Grid.Column>
                <Header textAlign="center">
                  <b>{this.state.movie7.title}</b>
                </Header>
                <Link to={"/movies/7"}>
                  <Image
                    style={{
                      border: "2px solid black",
                      boxShadow: "0 8px 6px -6px black"
                    }}
                    centered
                    src={this.state.movie7.poster}
                  />
                </Link>
              </Grid.Column>
              <Grid.Column>
                <Header textAlign="center">
                  <b>{this.state.movie8.title}</b>
                </Header>
                <Link to={"/movies/8"}>
                  <Image
                    style={{
                      border: "2px solid black",
                      boxShadow: "0 8px 6px -6px black"
                    }}
                    centered
                    src={this.state.movie8.poster}
                  />
                </Link>
              </Grid.Column>
              <Grid.Column>
                <Header textAlign="center">
                  <b>{this.state.movie9.title}</b>
                </Header>
                <Link to={"/movies/9"}>
                  <Image
                    style={{
                      border: "2px solid black",
                      boxShadow: "0 8px 6px -6px black"
                    }}
                    centered
                    src={this.state.movie9.poster}
                  />
                </Link>
              </Grid.Column>
              <Grid.Column>
                <Header textAlign="center">
                  <b>{this.state.movie10.title}</b>
                </Header>
                <Link to={"/movies/10"}>
                  <Image
                    style={{
                      border: "2px solid black",
                      boxShadow: "0 8px 6px -6px black"
                    }}
                    centered
                    src={this.state.movie10.poster}
                  />
                </Link>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </div>
    );
  }
}

HomePage.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(HomePage);
