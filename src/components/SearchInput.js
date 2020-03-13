import React from "react";

const SearchInput = ({ inputValue, handleInputChange }) => {
  return (
    <div className="form-group">
      <input
        className="form-control"
        id="searchInput"
        placeholder="Search"
        value={inputValue}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchInput;
