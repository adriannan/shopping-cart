import React from "react";

const AddBtn = ({ onClickAdd, itemID, shoppingCart }) => {
  return (
    <button
      onClick={() => {
        onClickAdd(itemID);
      }}
      className="list-item_btn btn-add btn btn-light col-2 d-flex justify-content-center align-items-center"
      disabled={shoppingCart.indexOf(itemID) !== -1}
    >
      <span className="d-none d-md-block text-uppercase small">Add to Cart</span>
    </button>
  );
};

export default AddBtn;
