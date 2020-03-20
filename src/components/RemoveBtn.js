import React from "react";

const RemoveBtn = ({ onClickRemove, item }) => {
  return (
    <button
      onClick={() => {
        onClickRemove(item);
      }}
      className="list-item_btn btn btn-light col-2 d-flex justify-content-center align-items-center"
    >
      <i className="fas fa-minus-circle"></i>
      <span className="d-none d-md-block"> Remove</span>
    </button>
  );
};

export default RemoveBtn;
