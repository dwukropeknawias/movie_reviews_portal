import { addReview } from "../actions/addReview";
import React, { Component } from "react";

import { Grid, Button, Form, Segment, TextArea } from "semantic-ui-react";

import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class AddReview extends Component {
  constructor() {
    super();
    this.state = {
      rating: "",
      description: "",
      movie_id: "",
      user_id: "",
      errors: {},
      ratingErrorEmpty: "",
      descriptionErrorEmpty: ""
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  validate = () => {
    let isError = false;
    const errors = {
      ratingErrorEmpty: "",
      descriptionErrorEmpty: ""
    };
    if (this.state.rating.trim() === "") {
      isError = true;
      errors.ratingErrorEmpty = "Rating cannot be empty";
    }

    if (this.state.description.trim() === "") {
      isError = true;
      errors.descriptionErrorEmpty = "Description cannot be empty";
    }

    if (isError) {
      this.setState(errors);
    }

    return isError;
  };

  onSubmit = e => {
    e.preventDefault();

    const { user } = this.props.auth;

    const err = this.validate();

    if (!err) {
      this.setState({
        rating: "",
        description: "",
        movie_id: "",
        user_id: "",
        errors: {},
        ratingErrorEmpty: "",
        descriptionErrorEmpty: ""
      });

      const newReview = {
        rating: this.state.rating,
        description: this.state.description,
        movie_id: this.props.movie_id,
        user_id: user.id
      };
      let self = this;
      this.props.addReview(newReview, this.props.history).then(function() {
        return self.props.getAllReviews();
      });
    }
  };

  render() {
    return (
      <div>
        <Grid
          textAlign="center"
          style={
            ({ height: "100%" },
            { marginTop: "5.5em" },
            { marginBottom: "8em" })
          }
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 1168.12 }}>
            <Form size="large" noValidate onSubmit={this.onSubmit}>
              <Segment stacked>
                <span class="errorsColor">{this.state.ratingErrorEmpty}</span>
                <Form.Input
                  id="rating"
                  name="rating"
                  fluid
                  icon="star"
                  iconPosition="left"
                  placeholder="Rating"
                  value={this.state.rating}
                  onChange={this.onChange}
                />

                <span class="errorsColor">
                  {this.state.descriptionErrorEmpty}
                </span>
                <Form>
                  <TextArea
                    style={{ height: "200px", resize: "none" }}
                    id="description"
                    name="description"
                    fluid
                    icon="pencil alternate"
                    iconPosition="left"
                    placeholder="Description"
                    error={this.state.descriptionErrorEmpty}
                    value={this.state.description}
                    onChange={this.onChange}
                  />
                </Form>
                <Button
                  style={{ marginTop: "1em" }}
                  color="grey"
                  fluid
                  size="large"
                >
                  Add Review
                </Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

AddReview.propTypes = {
  addAnnouncement: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { addReview }
)(withRouter(AddReview));
