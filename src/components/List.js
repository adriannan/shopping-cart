import React, { useState } from "react";
import ListItem from "./ListItem";
import SearchInput from "./SearchInput";

const List = ({
  load,
  onClickAdd,
  allItemsList,
  loadItems,
  shoppingCart,
  handleInputChange
}) => {
  // use hook to filter
  const [inputValue, setInputValue] = useState("");

  const itemsName = allItemsList.map(item => item);

  let filteredItems = [];
  itemsName.forEach(item => {
    if (item.name.toLowerCase().includes(inputValue.toLowerCase())) {
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
  const sliceItemList = allItems.slice(0, loadItems);

  return (
    <div className="container-list container-fluid ">
      <SearchInput
        inputValue={inputValue}
        setInputValue={setInputValue}
        loadItems={loadItems}
        handleInputChange={handleInputChange}
      />
      <ul className="list-group">{sliceItemList}</ul>
      <button
        className="btn-load btn btn-light btn-block col-3 mx-auto"
        onClick={load}
      >
        Load More
      </button>
    </div>
  );
};

export default List;
