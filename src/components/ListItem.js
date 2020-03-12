import React from "react";

const ListItem = props => {
  return (
    <div className="list-group-item list-group-item-action d-flex justify-content-between">
      <h3 className="list-item_tit d-flex  align-items-center col-8">
        {props.name}
      </h3>
      <span className=" d-flex  align-items-center text-right col-2">
        {props.price} $
      </span>
      <button className="list-item_btn btn btn-light col-2">
        <i class="fas fa-plus-circle"></i>
        Add to Cart
      </button>
    </div>
  );
};

export default ListItem;
