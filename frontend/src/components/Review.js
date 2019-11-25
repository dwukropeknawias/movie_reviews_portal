import React, { Component } from "react";

import {
  Grid,
  Segment,
  Feed,
  Button,
  TextArea,
  Form,
  Confirm
} from "semantic-ui-react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";

import ReactTimeAgo from "react-time-ago/tooltip";

import "react-time-ago/Tooltip.css";

import axios from "axios";

import "./Review.css";

class Review extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      isEditClicked: false,
      description: "",
      errors: {},
      messageErrorEmpty: "",
      open: false
    };
  }

  open = () => this.setState({ open: true });
  close = () => this.setState({ open: false });

  componentDidMount() {
    this.setState({
      description: this.props.review.description
    });
    axios
      .get(`/api/users/${this.props.review.user_id}`)
      .then(response => {
        this.setState({ user: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.setState({
        description: this.props.review.description
      });
      axios
        .get(`/api/users/${this.props.review.user_id}`)
        .then(response => {
          this.setState({ user: response.data });
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }

  validate = () => {
    let isError = false;
    const errors = {
      messageErrorEmpty: ""
    };
    if (this.state.description.trim() === "") {
      isError = true;
      errors.messageErrorEmpty = "Message cannot be empty";
    }

    if (isError) {
      this.setState(errors);
    }

    return isError;
  };

  EditIsClicked() {
    this.setState({ isEditClicked: !this.state.isEditClicked });
    axios
      .get(`/api/reviews/${this.props.review._id}`)
      .then(response => {
        this.setState({
          description: response.data.description
        });
      })
      .catch(err => {
        alert("Error while getting review");
      });
  }

  EditIsSend = e => {
    const err = this.validate();

    if (!err) {
      let updObj = {
        description: this.state.description
      };

      axios
        .post(`/api/reviews/update/${this.props.review._id}`, updObj)
        .then(data => {
          alert("Review has been successfully updated ");
          this.setState({ isEditClicked: false });
        })
        .catch(err => {
          alert("Error while updating review - blank field");
        });
    }
  };

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  ButtonDelete = e => {
    this.close();

    axios
      .post(`/api/reviews/delete/${this.props.review._id}`)
      .then(data => {
        alert("Review has been successfully deleted");
        this.props.commentDelete(this.props.review._id);

        //this.props.getAllComments();
      })
      .catch(err => {
        alert("Error while deleting review");
      });
  };

  render() {
    const { user } = this.props.auth;
    var acc = new String(this.state.user.username);
    //  acc = acc.substring(0, acc.indexOf("@"));
    //    var date =
    //    new Date(this.props.announcement.date_of_add).toLocaleTimeString() +
    //      ", " +
    //      new Date(this.props.announcement.date_of_add).toLocaleDateString();

    var date = new Date(this.props.review.date_of_add);

    return (
      <Grid
        textAlign="center"
        style={{ height: "100%" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 850 }}>
          <Segment style={{ width: "100%" }}>
            {user.id === this.state.user._id || user.isAdmin ? (
              <>
                <>
                  <Button color="vk" floated="right" onClick={this.open}>
                    Delete
                  </Button>
                  <Confirm
                    open={this.state.open}
                    onCancel={this.close}
                    onConfirm={this.ButtonDelete}
                  />
                </>
                <Button
                  color="vk"
                  floated="right"
                  onClick={() => this.EditIsClicked()}
                >
                  {" "}
                  Edit{" "}
                </Button>
              </>
            ) : (
              ""
            )}

            {this.state.isEditClicked ? (
              <Form size="large" noValidate onSubmit={this.EditIsSend}>
                <Feed style={{ marginTop: "1.5em" }}>
                  <Feed.Event>
                    <Feed.Label>
                      <img src={this.state.user.avatar} alt="avatar" />
                    </Feed.Label>
                    <Feed.Content>
                      <Feed.Date>
                        Added by{" "}
                        <Link to={"/account-view/" + acc}>
                          {this.state.user.username}
                        </Link>{" "}
                        <ReactTimeAgo
                          date={date}
                          tooltipClassName="TooltipCssReview"
                        />
                      </Feed.Date>
                      <div class="errorsColor">
                        {this.state.messageErrorEmpty}
                      </div>
                      <TextArea
                        id="description"
                        name="description"
                        style={{ width: "500px", resize: "none" }}
                        defaultValue={this.state.description}
                        value={this.state.description}
                        onChange={this.onChange}
                      />
                    </Feed.Content>
                  </Feed.Event>
                </Feed>

                <Button>Apply </Button>
              </Form>
            ) : (
              <Feed style={{ marginTop: "1.5em" }}>
                <Feed.Event>
                  <Feed.Label>
                    <img src={this.state.user.avatar} alt="avatar" />
                  </Feed.Label>
                  <Feed.Content>
                    <Feed.Date>
                      Added by{" "}
                      <Link to={"/account-view/" + acc}>
                        {this.state.user.username}
                      </Link>{" "}
                      <ReactTimeAgo
                        date={date}
                        tooltipClassName="TooltipCssReview"
                      />
                    </Feed.Date>

                    <Feed.Extra style={{ width: "90%" }}>
                      <div>{this.state.description}</div>
                    </Feed.Extra>
                  </Feed.Content>
                </Feed.Event>
              </Feed>
            )}
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

Review.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Review);
