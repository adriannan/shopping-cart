import React, { useState } from "react";
import AddBtn from "./AddBtn";
const ListItem = props => {
  const [available, setAvailable] = useState(1);
  function addItem() {
    setAvailable(0);
  }
  return (
    <div
      className={`list-group-item list-group-item-action d-flex justify-content-between ${!available &&
        "disabled"}`}
    >
      <h3 className="list-item_tit d-flex  align-items-center col-8">
        {props.name}
      </h3>
      <span className=" d-flex  align-items-center text-right col-2">
        {props.price} $
      </span>
      <AddBtn
        onClick={props.onClick}
        onAdd={addItem}
        available={available}
        item={props.name}
      />
    </div>
  );
};

export default ListItem;
