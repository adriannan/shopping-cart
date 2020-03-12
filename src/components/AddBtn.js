import React from "react";

const AddBtn = props => {
  return (
    <button
      onClick={() => {
        props.onClickAdd(props.itemID);
      }}
      className="list-item_btn btn btn-light col-2"
      disabled={props.shoppingCart.indexOf(props.itemID) !== -1}
    >
      <i class="fas fa-plus-circle"></i>
      Add to Cart
    </button>
  );
};

export default AddBtn;
