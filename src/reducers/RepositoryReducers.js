import {
  REPOSITORY_SEARCH_REQUEST,
  REPOSITORY_SEARCH_SUCCESS,
  REPOSITORY_SEARCH_FAIL,
  REPOSITORY_ISSUES_REQUEST,
  REPOSITORY_ISSUES_SUCCESS,
  REPOSITORY_ISSUES_FAIL,
} from "../constants/RepositoryContants";

export const repositorySearchReducer = (state = {}, action) => {
  switch (action.type) {
    case REPOSITORY_SEARCH_REQUEST:
      return { ...state, loading: true };
    case REPOSITORY_SEARCH_SUCCESS:
      if (action.payload.total_count === 0) {
        return {
          ...state,
          loading: false,
          message: "No repository found with this name",
        };
      } else {
        return {
          ...state,
          loading: false,
          repository: action.payload,
        };
      }

    case REPOSITORY_SEARCH_FAIL:
      return {
        ...state,
        loading: false,
        // message: !action.payload ? "No repo" : "",
        error: action.payload,
      };
    default:
      return state;
  }
};

export const repositoryIssueReducer = (state = {}, action) => {
  switch (action.type) {
    case REPOSITORY_ISSUES_REQUEST:
      return { ...state, loading: true };
    case REPOSITORY_ISSUES_SUCCESS:
      if (action.payload.items.length === 0) {
        return {
          ...state,
          loading: false,
          message: "This Repository has no issues",
        };
      } else {
        return {
          ...state,
          loading: false,
          issues: action.payload,
        };
      }

    case REPOSITORY_ISSUES_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
