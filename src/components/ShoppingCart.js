import React from "react";
import CartItem from "./CartItem";

const ShoppingCart = ({ cartList, onClickRemove, onClickConfirm }) => {
  const itemsList = cartList.map(item => {
    return <CartItem key={item.id} {...item} onClickRemove={onClickRemove} />;
  });

  let totalPrice = 0;
  cartList.map(item => item.price).forEach(curNum => (totalPrice += curNum));

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
          <button
            className="list-item_btn btn btn-light col-2"
            type="submit"
            onClick={onClickConfirm}
          >
            Confirm Order
          </button>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;
