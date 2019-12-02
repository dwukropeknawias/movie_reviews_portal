import React, { Component } from "react";
import axios from "axios";

import { Header, Grid, Segment, Feed, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

import ReactTimeAgo from "react-time-ago/tooltip";

import "react-time-ago/Tooltip.css";

import Comment from "./Comment";
import CommentAdd from "./CommentAdd";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";

class ReviewView extends Component {
  constructor(props) {
    super(props);
    this.state = { review: {}, user: {}, comments: [] };
  }

  getAllComments = () => {
    axios
      .get(`/api/feedbacks/review/1`)
      .then(response => {
        this.setState({ comments: response.data });
        console.log(this.state.comments);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  commentDelete = id => {
    this.setState({
      comments: this.state.comments.filter(function(comment) {
        return comment._id !== id;
      })
    });
  };

  componentDidMount() {
    const {
      match: { params }
    } = this.props;

    axios
      .get(`/api/reviews/1`)
      .then(response => {
        this.setState({
          review: response.data,
          someTime: (
            <ReactTimeAgo
              date={new Date(response.data.date_of_add)}
              tooltipClassName="TooltipCssReviewView"
            />
          )
        });
        return axios.get(`/api/users/${response.data.user_id}`);
      })
      .then(response => {
        this.setState({ user: response.data });
        this.getAllComments(this.comments);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  commentsList() {
    let self = this;
    return this.state.comments.map(function(currentComment, i) {
      return (
        <Comment
          commentDelete={self.commentDelete}
          comment={currentComment}
          key={i}
        />
      );
    });
  }
  render() {
    var acc = new String(this.state.user.username);
    acc = acc.substring(0, acc.indexOf("@"));
    //  var date2 =
    //    new Date(this.state.review.date_of_add).toLocaleTimeString() +
    //    ", " +
    //    new Date(this.state.review.date_of_add).toLocaleDateString();
    //console.log(this.state.review);
    //var date = new Date(this.state.review.date_of_add);
    //var date = new Date();
    return (
      <div className="login-form">
        <Grid
          textAlign="center"
          style={({ height: "100%" }, { paddingTop: "5.5em" })}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 850 }}>
            <Segment>
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
                    </Feed.Date>
                    <Feed.Extra>
                      <Icon name="star" color="yellow" />
                      <span className="rating_text">
                        {this.state.review.rating}{" "}
                      </span>
                    </Feed.Extra>
                    <Feed.Extra style={{ width: "90%" }}>
                      <div>{this.state.review.description}</div>
                    </Feed.Extra>
                  </Feed.Content>
                </Feed.Event>
              </Feed>
            </Segment>

            <Header
              as="h3"
              dividing
              textAlign="left"
              style={{ marginTop: "4em" }}
            >
              Feedbacks
            </Header>

            {this.commentsList()}
            <Grid.Column style={{ marginTop: "5.5em" }}>
              {this.props.auth.isAuthenticated ? (
                <CommentAdd
                  s
                  getAllComments={this.getAllComments}
                  review_id={this.state.review._id}
                />
              ) : (
                ""
              )}
            </Grid.Column>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

ReviewView.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(ReviewView);
