import React, { useState } from "react";
import RemoveBtn from "./RemoveBtn";

const CartItem = props => {
  const [available, setAvailable] = useState(1);
  function addItem() {
    setAvailable(0);
  }
  return (
    <div
      className={`list-group-item list-group-item-action d-flex justify-content-between ${!available &&
        "disabled"}`}
    >
      <h3 className="list-item_tit d-flex  align-items-center col-6">
        {props.name}
      </h3>
      <span className=" list-item_price d-flex  align-items-center justify-content-end col-2">
        {props.price} $
      </span>
      <RemoveBtn
        onClickRemove={props.onClickRemove}
        available={available}
        item={props.id}
      />
    </div>
  );
};

export default CartItem;
