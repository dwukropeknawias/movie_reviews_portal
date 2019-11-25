import React, { Component } from "react";
import {
  Button,
  Header,
  Form,
  Segment,
  Message,
  Transition
} from "semantic-ui-react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import axios from "axios";

class NameSettings extends Component {
  constructor(props) {
    super();
    this.state = {
      id: props.id,
      first_name: "",
      last_name: "",
      changeName: props.changeName,
      errors: {},
      firstNameErrorEmpty: "",
      firstNameErrorWhitespaces: "",
      formSuccess: false
    };
  }

  componentDidMount() {
    var that = this;
    axios
      .get("api/users/" + this.state.id)
      .then(res =>
        that.setState({
          first_name: res.data.first_name,
          last_name: res.data.last_name
        })
      )
      .catch(err =>
        that.setState({
          err
        })
      );
  }

  getFirstNameErrorMessages = first_name => {
    return {
      firstNameErrorEmpty:
        first_name.trim() === "" ? "First name cannot be empty" : "",
      firstNameErrorWhitespaces: /\s/.test(first_name)
        ? "First name cannot contain whitespaces"
        : ""
    };
  };

  getLastNameErrorMessages = last_name => {
    return {
      lastNameErrorEmpty:
        last_name.trim() === "" ? "Last name cannot be empty" : "",
      lastNameErrorWhitespaces: /\s/.test(last_name)
        ? "Last name cannot contain whitespaces"
        : ""
    };
  };

  onSubmit = e => {
    e.preventDefault();

    const errors = {
      ...this.getFirstNameErrorMessages(this.state.first_name),
      ...this.getLastNameErrorMessages(this.state.last_name)
    };

    const hasErrors = Object.values(errors).some(message => message !== "");

    if (!hasErrors) {
      const newUser = {
        id: this.state.id,
        first_name: this.state.first_name,
        last_name: this.state.last_name
      };
      this.props.changeName(newUser);
      this.setState({ formSuccess: true });
      setTimeout(
        (() => this.setState({ formSuccess: false })).bind(this),
        4500
      );
    } else {
      this.setState(errors);
    }
  };

  updateInput = (e, getErrorMessages) => {
    this.setState({
      ...getErrorMessages(e.target.value),
      [e.target.id]: e.target.value
    });
  };

  render() {
    return (
      <Form size="large" noValidate onSubmit={this.onSubmit}>
        <Segment className="changename-form" stacked textAlign="center">
          <Header as="h4" color="black" textAlign="center">
            Change your first and last name
          </Header>

          <div>
            <span className="errorsColor">
              {this.state.firstNameErrorEmpty}
            </span>
          </div>
          <div>
            <span className="errorsColor">
              {this.state.firstNameErrorWhitespaces}
            </span>
          </div>
          <Form.Input
            id="first_name"
            name="first_name"
            placeholder="First Name"
            defaultValue={this.state.first_name}
            disabled={this.state.formSuccess}
            value={this.state.first_name}
            onChange={e => this.updateInput(e, this.getFirstNameErrorMessages)}
            style={{ maxWidth: 250 }}
          />
          <div>
            <span className="errorsColor">{this.state.lastNameErrorEmpty}</span>
          </div>
          <div>
            <span className="errorsColor">
              {this.state.lastNameErrorWhitespaces}
            </span>
          </div>
          <Form.Input
            id="last_name"
            name="last_name"
            placeholder="Last Name"
            defaultValue={this.state.last_name}
            disabled={this.state.formSuccess}
            value={this.state.last_name}
            onChange={e => this.updateInput(e, this.getLastNameErrorMessages)}
            style={{ maxWidth: 250 }}
          />
          <Transition
            visible={this.state.formSuccess}
            animation="scale"
            duration={500}
          >
            <Message
              floating
              success
              header="Account details updated"
              content="You have successfully changed your name"
            />
          </Transition>
          <Button color="grey" size="medium" style={{ maxWidth: 250 }}>
            Apply
          </Button>
        </Segment>
      </Form>
    );
  }
}

class PasswordSettings extends Component {
  constructor(props) {
    super();
    this.state = {
      id: props.id,
      newPassword: "",
      newPasswordConfirmation: "",
      changePassword: props.changePassword,
      errors: {},
      formSuccess: false
    };
  }

  updateInput = (e, getErrorMessages) => {
    this.setState({
      ...getErrorMessages(e.target.value),
      [e.target.id]: e.target.value
    });
  };

  getNewPasswordErrorMessages = newPassword => {
    return {
      newPasswordErrorEmpty:
        newPassword.trim() === "" ? "New Password cannot be empty" : "",
      newPasswordErrorWhitespaces: /\s/.test(newPassword)
        ? "New Password cannot contain whitespaces"
        : "",
      newPasswordErrorLength:
        newPassword.length < 6
          ? "New Password must have at least 6 characters "
          : ""
    };
  };

  getNewPasswordConfirmationErrorMessages = newPasswordConfirmation => {
    return {
      newPasswordConfirmationErrorEmpty:
        newPasswordConfirmation.trim() === ""
          ? "New Password confirmation cannot be empty"
          : "",
      newPasswordConfirmationErrorWhitespaces: /\s/.test(
        newPasswordConfirmation
      )
        ? "New Password confirmation cannot contain whitespaces"
        : "",
      newPasswordConfirmationErrorMatch:
        this.state.newPassword !== newPasswordConfirmation
          ? "New Password and New Password Confirmation must match"
          : ""
    };
  };

  onSubmit = e => {
    e.preventDefault();

    const errors = {
      ...this.getNewPasswordErrorMessages(this.state.newPassword),
      ...this.getNewPasswordConfirmationErrorMessages(
        this.state.newPasswordConfirmation
      )
    };

    const hasErrors = Object.values(errors).some(message => message !== "");

    if (!hasErrors) {
      const newUser = {
        id: this.state.id,
        newPassword: this.state.newPassword,
        newPasswordConfirmation: this.state.newPasswordConfirmation
      };
      this.props.changePassword(newUser);
      this.setState({
        formSuccess: true,
        newPassword: "",
        newPasswordConfirmation: "",
        newPasswordErrorEmpty: "",
        newPasswordErrorLengt: "",
        newPasswordErrorWhitespaces: "",
        newPasswordConfirmationErrorEmpty: "",
        newPasswordConfirmationErrorWhitespaces: "",
        newPasswordConfirmationErrorMatch: "",
        errors: {}
      });
      setTimeout(
        (() => this.setState({ formSuccess: false })).bind(this),
        4500
      );
    } else {
      this.setState(errors);
    }
  };

  render() {
    return (
      <Form size="large" noValidate onSubmit={this.onSubmit}>
        <Segment className="changepassword-form" stacked textAlign="center">
          <Header as="h4" color="black" textAlign="center">
            Change your password
          </Header>

          <div>
            <span className="errorsColor">
              {this.state.newPasswordErrorEmpty}
            </span>
          </div>
          <div>
            <span className="errorsColor">
              {this.state.newPasswordErrorLength}
            </span>
          </div>
          <div>
            <span className="errorsColor">
              {this.state.newPasswordErrorWhitespaces}
            </span>
          </div>
          <Form.Input
            type="password"
            id="newPassword"
            name="newPassword"
            placeholder="New Password"
            disabled={this.state.formSuccess}
            value={this.state.newPassword}
            onChange={e =>
              this.updateInput(e, this.getNewPasswordErrorMessages)
            }
            style={{ maxWidth: 250 }}
          />

          <div>
            <span className="errorsColor">
              {this.state.newPasswordConfirmationErrorEmpty}
            </span>
          </div>
          <div>
            <span className="errorsColor">
              {this.state.newPasswordConfirmationErrorWhitespaces}
            </span>
          </div>
          <div>
            <span className="errorsColor">
              {this.state.newPasswordConfirmationErrorMatch}
            </span>
          </div>
          <Form.Input
            type="password"
            id="newPasswordConfirmation"
            name="newPasswordConfirmation"
            placeholder="Confirm New Password"
            disabled={this.state.formSuccess}
            value={this.state.newPasswordConfirmation}
            onChange={e =>
              this.updateInput(e, this.getNewPasswordConfirmationErrorMessages)
            }
            style={{ maxWidth: 250 }}
          />
          <Transition
            visible={this.state.formSuccess}
            animation="scale"
            duration={500}
          >
            <Message
              floating
              success
              header="Password updated"
              content="You have successfully changed your password"
            />
          </Transition>
          <Button color="grey" size="medium" style={{ maxWidth: 250 }}>
            Apply
          </Button>
        </Segment>
      </Form>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
  id: state.id,
  first_name: state.first_name,
  last_name: state.last_name
});

export { NameSettings, PasswordSettings };
