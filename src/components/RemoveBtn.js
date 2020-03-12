import React from "react";

const RemoveBtn = ({ onClickRemove, item }) => {
  return (
    <button
      onClick={() => {
        onClickRemove(item);
      }}
      className="list-item_btn btn btn-light col-2"
    >
      <i class="fas fa-minus-circle"></i>
      Remove
    </button>
  );
};

export default RemoveBtn;
