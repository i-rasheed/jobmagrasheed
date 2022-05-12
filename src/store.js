import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import {
  repositorySearchReducer,
  repositoryIssueReducer,
} from "../src/reducers/RepositoryReducers";

const initialState = {};

const reducer = combineReducers({
  repositorySearched: repositorySearchReducer,
  repositoryIssues: repositoryIssueReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
