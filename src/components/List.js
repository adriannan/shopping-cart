import React, { useState } from "react";
import ListItem from "./ListItem";
import SearchInput from "./SearchInput";
import UpBtn from "./UpBtn";
import $ from "jquery";
// const regex = /(<([^>]+)>)/gi;
// const description = synopsis.replace(regex, " ").replace("&#39;", "'");

const List = ({
  handleload,
  onClickAdd,
  dataList,
  items,
  shoppingCart,
  handleInputChange
}) => {
  // use hook to filter
  const [inputValue, setInputValue] = useState("");

  let filteredItems = [];
  dataList.forEach(item => {
    if (
      item.name
        .replace(" - ", " ")
        .toLowerCase()
        .includes(inputValue.toLowerCase())
    ) {
      filteredItems.push(item);
    }
  });

  // setting available product list
  const allItems = filteredItems.map(item => {
    return (
      <ListItem
        key={item.id}
        id={item.id}
        onClickAdd={onClickAdd}
        {...item}
        shoppingCart={shoppingCart}
      />
    );
  });
  return (
    <div className="container-list container-fluid ">
      <SearchInput
        inputValue={inputValue}
        setInputValue={setInputValue}
        handleInputChange={handleInputChange}
      />
      <ul className="list-group">{allItems.slice(0, items)}</ul>
      {filteredItems.length > 10 &&
        $(".list-group-item").length < filteredItems.length && (
          <>
            <button
              className="btn-load btn btn-light btn-block col-3 mx-auto"
              onClick={handleload}
            >
              Load More
            </button>
            <UpBtn />
          </>
        )}
    </div>
  );
};

export default List;
