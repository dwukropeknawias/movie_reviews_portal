import { addComment } from "../actions/addComment";
import React, { Component } from "react";

import { Grid, Button, Form, Segment, TextArea } from "semantic-ui-react";

import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class CommentAdd extends Component {
  constructor() {
    super();
    this.state = {
      description: "",
      review_id: "",
      user_id: "",
      errors: {},
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
      descriptionErrorEmpty: ""
    };
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
        description: "",
        errors: {},
        descriptionErrorEmpty: ""
      });

      const newComment = {
        description: this.state.description,
        review_id: this.props.review_id,
        user_id: user.id
      };
      let self = this;
      this.props.addComment(newComment, this.props.history).then(function() {
        return self.props.getAllComments();
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
                <span class="errorsColor">
                  {this.state.descriptionErrorEmpty}
                </span>
                <TextArea
                  style={{ resize: "none" }}
                  id="description"
                  name="description"
                  fluid
                  icon="write"
                  iconPosition="left"
                  placeholder="Description"
                  value={this.state.description}
                  onChange={this.onChange}
                />

                <Button
                  style={{ marginTop: "1em" }}
                  color="grey"
                  fluid
                  size="large"
                >
                  Reply
                </Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

CommentAdd.propTypes = {
  addComment: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { addComment }
)(withRouter(CommentAdd));
