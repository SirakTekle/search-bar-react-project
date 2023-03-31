import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";
import axios from "axios";

const SearchBar = ({ setResult }) => {
  const [input, setInput] = useState("");
  const fetchData = (value) => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      const data = response.data;
      const result = data.filter((user) => {
        return (
          value && user && user.name && user.name.toLowerCase().includes(value)
        );
      });
      setResult(result);
    });
  };

  const handleChange = (value) => {
    setInput();
    fetchData(value);
  };
  return (
    <div className="input-wrapper">
      <FaSearch id="search-icons" />
      <input
        type="text"
        placeholder="Type to search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
