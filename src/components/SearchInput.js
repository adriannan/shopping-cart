import React from "react";

const SearchInput = props => {
  const handleChange = e => {
    props.setInputValue(e.target.value);
    props.handleInputChange();
  };
  return (
    <div className="form-group">
      <input
        className="form-control"
        id="searchInput"
        placeholder="Search"
        value={props.inputValue}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchInput;
