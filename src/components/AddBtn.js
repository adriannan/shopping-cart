import React from "react";

const AddBtn = props => {
  return (
    <button
      onClick={() => {
        props.onClick(props.item);
        props.onAdd();
      }}
      className="list-item_btn btn btn-light col-2"
      disabled={props.available === 0 ? true : false}
    >
      <i class="fas fa-plus-circle"></i>
      Add to Cart
    </button>
  );
};

export default AddBtn;
