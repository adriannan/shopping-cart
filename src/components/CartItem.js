import React from "react";
import RemoveBtn from "./RemoveBtn";

const CartItem = ({ name, price, onClickRemove, id }) => {
  return (
    <div
      className={`list-group-item list-group-item-action d-flex justify-content-between`}
    >
      <h3 className="list-item_tit d-flex  align-items-center col-md-6">
        {name}
      </h3>
      <span className=" list-item_price d-flex  align-items-center justify-content-end col-md-2 col-10">
        {price} $
      </span>
      <RemoveBtn onClickRemove={onClickRemove} item={id} />
    </div>
  );
};

export default CartItem;
