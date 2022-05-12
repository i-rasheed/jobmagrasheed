import React from "react";

export default function SearchResult(props) {
  return (
    <div className='row center'>
      <div className='col-sm-6'>
        <div className='card'>
          <div className='card-body'>
            <h5 className='card-title'>Repository Information</h5>
            <p className='card-text'>
              Repo URL : {props.repository.items[0].html_url}{" "}
            </p>
            <p className='card-text'>
              Description : {props.repository.items[0].description}{" "}
            </p>
            <p className='card-text'>
              Forks Count : {props.repository.items[0].forks_count}{" "}
            </p>
            <p className='card-text'>
              Stargazers Count : {props.repository.items[0].stargazers_count}{" "}
            </p>
            <p className='card-text'>
              Open Issues Count : {props.repository.items[0].open_issues_count}{" "}
            </p>
            <p className='card-text'>
              Wacthers Count : {props.repository.items[0].open_issues_count}{" "}
            </p>
            <p className='card-text'>
              Open Issues Count : {props.repository.items[0].open_issues_count}{" "}
            </p>
            <p className='card-text'>
              Language : {props.repository.items[0].language}{" "}
            </p>
            {/* <a href='/' className='btn btn-primary'>
              Go somewhere
            </a> */}
          </div>
        </div>
      </div>
      {/* <IssuesResult fullName={props.repository.items[0].full_name} /> */}
    </div>
  );
}
