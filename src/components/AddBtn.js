import React from "react";

const AddBtn = ({ onClickAdd, itemID, shoppingCart }) => {
  return (
    <button
      onClick={() => {
        onClickAdd(itemID);
      }}
      className="list-item_btn btn btn-light col-2"
      disabled={shoppingCart.indexOf(itemID) !== -1}
    >
      <i class="fas fa-plus-circle"></i>
      Add to Cart
    </button>
  );
};

export default AddBtn;
