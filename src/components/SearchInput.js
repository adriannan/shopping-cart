import React from "react";

const SearchInput = ({ setInputValue, handleInputChange, inputValue }) => {
  const handleChange = e => {
    setInputValue(e.target.value);
    handleInputChange();
  };
  return (
    <div className="form-group">
      <input
        className="form-control"
        id="searchInput"
        placeholder="Search"
        value={inputValue}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchInput;
