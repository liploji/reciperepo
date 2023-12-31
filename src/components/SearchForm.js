import React, { useState, useEffect } from "react";
import "../Styles/styles.scss";

const SearchForm = ({ onSubmit }) => {
  const [search, setSearch] = useState("");

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(search);
    setSearch("");
  };

  return (
    <div className="SearchForm">
      <h3>Welcome to the Search Page</h3>
      <form onSubmit={handleSubmit} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <br/>
        <button className="Button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};


export default SearchForm;

