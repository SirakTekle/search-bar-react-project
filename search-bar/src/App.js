import React, { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import SearchResultsList from "./components/SearchResultsList";

const App = () => {
  const [result, setResult] = useState([]);

  return (
    <div className="App">
      <div className="search-bar-container">
        <SearchBar setResult={setResult} />
        <SearchResultsList result={result} />
      </div>
    </div>
  );
};

export default App;
