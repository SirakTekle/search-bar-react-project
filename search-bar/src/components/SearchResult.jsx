import React, { useState } from "react";
import "./SearchResult.css";
import ShowSelect from "../components/ShowSelect";

const SearchResult = ({ item }) => {
  const [name, setName] = useState("");
  const [isName, setIsName] = useState(true);
  const handleDone = () => {
    setIsName(true);
  };
  const handleOff = (name) => {
    setName(name);
    setIsName(false);
  };
  return (
    <div>
      {isName ? (
        <div className="search-result" onClick={() => handleOff(item.name)}>
          {item.name}
        </div>
      ) : (
        <ShowSelect name={name} handleDone={handleDone} />
      )}
    </div>
  );
};

export default SearchResult;
