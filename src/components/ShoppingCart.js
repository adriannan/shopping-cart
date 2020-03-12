import React, { useState } from "react";
import CartItem from "./CartItem";

const ShoppingCart = ({ list, cartList, onClickRemove, allItemsList }) => {
  const itemsList = cartList.map(item => {
    return <CartItem key={item.id} {...item} onClickRemove={onClickRemove} />;
  });
  //   const [totalPrice, calcTotalPrice] = useState(0);

  const prices = cartList.map(item => item.price);

  let totalPrice = 0;
  prices.forEach(curNum => (totalPrice += curNum));

  //   console.log(itemsList);

  return (
    <div className="container-list container-fluid ">
      <ul className="list-group">{itemsList}</ul>
      <div className="list-group_summary list-group-item  d-flex  justify-content-between">
        <h3 className="list-item_tit d-flex justify-content-start align-items-center col-6">
          Total
        </h3>
        <span className="list-item_price d-flex  align-items-center justify-content-end col-2">
          {Math.round(totalPrice * 100) / 100} $
        </span>
        {itemsList.length > 0 && (
          <button className="list-item_btn btn btn-light col-2">
            Confirm Order
          </button>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;
