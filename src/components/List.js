import React from "react";
import ListItem from "./ListItem";

const List = ({ load, onClickAdd, allItemsList, loadItems, shoppingCart }) => {
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
