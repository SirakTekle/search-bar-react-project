import React from "react";
import SearchResult from "./SearchResult";
import "./SearchResultsList.css";

const SearchResultsList = ({ result }) => {
  return (
    <div className="results-list">
      {result.map((item) => {
        return (
          <div key={item.id}>
            <SearchResult item={item} key={item.id} />
          </div>
        );
      })}
    </div>
  );
};

export default SearchResultsList;
