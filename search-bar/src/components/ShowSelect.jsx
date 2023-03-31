import React from "react";

const ShowSelect = ({ name, handleDone }) => {
  return (
    <div>
      <div>
        <h1 onClick={handleDone}>{name}</h1>
      </div>
    </div>
  );
};

export default ShowSelect;
