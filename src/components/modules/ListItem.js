import React from "react";
import AddBtn from "../atoms/AddBtn";

const ListItem = ({ shoppingCart, name, id, price, onClickAdd }) => {
  return (
    <div
      className={`list-group-item list-group-item-action d-flex  justify-content-between ${shoppingCart.indexOf(
        id
      ) !== -1 && "disabled"}`}
    >
      <h3 className="list-item_tit d-flex  align-items-center  col-md-6">
        {name}
      </h3>
      <span className="list-item_price d-flex  align-items-center justify-content-end col-md-2 col-10">
        {price} $
      </span>
      <AddBtn onClickAdd={onClickAdd} itemID={id} shoppingCart={shoppingCart} />
    </div>
  );
};

export default ListItem;
