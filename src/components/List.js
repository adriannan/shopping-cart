import React, { useState } from "react";
import ListItem from "./modules/ListItem";
import ListHeader from "./modules/ListHeader";
import SearchInput from "./atoms/SearchInput";

const List = ({
  handleLoad,
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
        .replace(", ", " ")
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
      <ListHeader />

      <ul className="list-group list-group-flush">{allItems.slice(0, items)}</ul>
      {filteredItems.length > 10 &&
        document.getElementsByClassName("list-group-item").length < filteredItems.length && (
          <>
            <button
              className="btn-load text-uppercase btn btn-light btn-block col-md-3 col-6 mx-auto"
              onClick={handleLoad}
            >
              Load More
            </button>
          </>
        )}
    </div>
  );
};

export default List;
