import React from "react";

const RemoveBtn = props => {
  return (
    <button
      onClick={() => {
        props.onClickRemove(props.item);
      }}
      className="list-item_btn btn btn-light col-2"
      disabled={props.available === 0 ? true : false}
    >
      <i class="fas fa-minus-circle"></i>
      Remove
    </button>
  );
};

export default RemoveBtn;
