import axios from "axios";

import { GET_ERRORS } from "./types";

export const addReview = (reviewData, history) => dispatch => {
  return axios
    .post("/api/reviews/add", reviewData)
    .then(res => history)
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
