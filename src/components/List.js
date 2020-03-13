import React, { useState } from "react";
import ListItem from "./ListItem";
import SearchInput from "./SearchInput";

const List = ({
  load,
  onClickAdd,
  allItemsList,
  loadItems,
  shoppingCart,
  handleInputChange,
  onSearching,
  inputValueState,
  filteredItems
}) => {
  // setting available product list
  const allFilteredItems = filteredItems.map(item => {
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
  const allItems = allItemsList.map(item => {
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
        inputValue={inputValueState}
        handleInputChange={handleInputChange}
      />
      {onSearching && (
        <ul
          className="list-group"
          style={{ maxHeight: "500px", overflow: "scroll" }}
        >
          {allFilteredItems}
        </ul>
      )}

      {!onSearching && (
        <>
          <ul className="list-group">{sliceItemList}</ul>
          <button
            className="btn-load btn btn-light btn-block col-3 mx-auto"
            onClick={load}
          >
            Load More
          </button>
        </>
      )}
    </div>
  );
};

export default List;
