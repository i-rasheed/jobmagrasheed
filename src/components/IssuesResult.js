import React, { useEffect } from "react";
import Spinner from "./Spinner";
import ErrorDisplay from "./ErrorDisplay";
import { useSelector, useDispatch } from "react-redux";
import { listRepoIssues } from "../actions/RepositoryActions";

export default function IssuesResult({ fullName }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listRepoIssues(fullName));
  }, [dispatch, fullName]);

  const repositoryIssues = useSelector((state) => state.repositoryIssues);
  const { loading, error, message, issues } = repositoryIssues;

  return (
    <div className='center margin-top-2rem'>
      <div className='col-sm-6'>
        <h5 className='card-title'>Repository Issues</h5>
        {loading ? (
          <Spinner />
        ) : error ? (
          <ErrorDisplay error={error} />
        ) : message ? (
          <ErrorDisplay error={message} />
        ) : issues ? (
          issues.items.map((x, index) => (
            <div className='card' key={x.id}>
              <div className='card-body'>
                <p className='card-text'>
                  #{index + 1} {x.title}
                </p>
                <p className='card-text'>Username : {x.user.login}.</p>
              </div>
            </div>
          ))
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
