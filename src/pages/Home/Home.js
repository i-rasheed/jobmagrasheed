import React, { useState } from "react";
import "./Home.css";
import Spinner from "../../components/Spinner";
import ErrorDisplay from "../../components/ErrorDisplay";
import SearchResult from "../../components/SearchResult";
import { searchRepository } from "../../actions/RepositoryActions";
import { useSelector, useDispatch } from "react-redux";
import BarChart from "../../charts/BarChart";
import IssuesResult from "../../components/IssuesResult";

export default function Home() {
  const [value, setValue] = useState();
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const repositorySearched = useSelector((state) => state.repositorySearched);
  const { loading, repository, error } = repositorySearched;

  const handleSearch = async (e) => {
    e.preventDefault();
    dispatch(searchRepository(value));
  };

  return (
    <div className='home_wrapper'>
      <form className='row g-3 center' onSubmit={handleSearch}>
        <div className='col-auto '>
          <input
            type='text'
            onChange={handleInputChange}
            className='form-control'
            id='search'
            placeholder='Search by name'
            required
          />
        </div>
        <div className='col-auto'>
          <button type='submit' className='btn btn-primary mb-3'>
            Search
          </button>
        </div>
      </form>
      <div className='center margin-top-2rem'>
        {loading ? (
          <Spinner />
        ) : error ? (
          <ErrorDisplay error={error} />
        ) : repository ? (
          <SearchResult repository={repository} />
        ) : (
          "Search for a repository. Results will be displayed here."
        )}
      </div>
      {repository && <IssuesResult fullName={repository.items[0].full_name} />}
      {repository && <BarChart repository={repository} />}
    </div>
  );
}
