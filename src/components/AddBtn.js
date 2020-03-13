import React from "react";

const AddBtn = ({ onClickAdd, itemID, shoppingCart }) => {
  return (
    <button
      onClick={() => {
        onClickAdd(itemID);
      }}
      className="list-item_btn btn btn-light col-2 d-flex justify-content-center align-items-center"
      disabled={shoppingCart.indexOf(itemID) !== -1}
    >
      <i class="fas fa-plus-circle"></i>
      <span className="d-none d-md-block">Add to Cart</span>
    </button>
  );
};

export default AddBtn;
