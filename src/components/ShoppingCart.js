import React from "react";
import CartItem from "./CartItem";

const ShoppingCart = ({ list, cartList, onClickRemove }) => {
  const itemsList = cartList.map(item => {
    return <CartItem key={item.id} {...item} onClickRemove={onClickRemove} />;
  });
  return (
    <div className="container-list container-fluid ">
      <ul className="list-group">{itemsList}</ul>
    </div>
  );
};

export default ShoppingCart;
