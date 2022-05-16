import Axios from "axios";

import {
  REPOSITORY_SEARCH_REQUEST,
  REPOSITORY_SEARCH_SUCCESS,
  REPOSITORY_SEARCH_FAIL,
  REPOSITORY_ISSUES_REQUEST,
  REPOSITORY_ISSUES_SUCCESS,
  REPOSITORY_ISSUES_FAIL,
} from "../constants/RepositoryContants";

export const searchRepository = (value) => async (dispatch) => {
  dispatch({
    type: REPOSITORY_SEARCH_REQUEST,
    payload: value,
  });
  try {
    const { data } = await Axios.get(
      `https://api.github.com/search/repositories?q=${value}`
    );
    dispatch({ type: REPOSITORY_SEARCH_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: REPOSITORY_SEARCH_FAIL,
      payload: error.message,
    });
  }
};

export const listRepoIssues = (fullName) => async (dispatch) => {
  dispatch({
    type: REPOSITORY_ISSUES_REQUEST,
  });
  try {
    const { data } = await Axios.get(
      `https://api.github.com/search/issues?q=repo:${fullName}`
    );
    dispatch({ type: REPOSITORY_ISSUES_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: REPOSITORY_ISSUES_FAIL,
      payload: error.message,
    });
  }
};
