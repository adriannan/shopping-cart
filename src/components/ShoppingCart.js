import React, { useState } from "react";
import CartItem from "./CartItem";
import $ from "jquery";

const ShoppingCart = ({ cartList, onClickRemove, onClickConfirm }) => {
  const [visibleAlert, setVisibleAlert] = useState(false);
  const showAlert = () => {
    setVisibleAlert(true);
    $(".alert").alert();
  };
  const closeAlert = () => {
    setVisibleAlert(false);
  };

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
            onClick={() => {
              onClickConfirm();
              showAlert();
            }}
          >
            Confirm Order
          </button>
        )}
      </div>
      {visibleAlert && (
        <div
          onClick={closeAlert}
          class="alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          Your order has been confirmed. <strong>Thank You!</strong>
          <button
            type="button"
            class="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
