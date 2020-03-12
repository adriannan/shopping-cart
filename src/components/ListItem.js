import React, { useState } from "react";
import AddBtn from "./AddBtn";

const ListItem = props => {
  // const [available, setAvailable] = useState(true);
  // function addItem() {
  //   if (props.shoppingCart.indexOf(props.id) !== -1) {
  //     setAvailable(false);
  //   }
  // }
  return (
    <div
      className={`list-group-item list-group-item-action d-flex justify-content-between ${props.shoppingCart.indexOf(
        props.id
      ) !== -1 && "disabled"}`}
    >
      <h3 className="list-item_tit d-flex  align-items-center col-6">
        {props.name}
      </h3>
      <span className=" list-item_price d-flex  align-items-center justify-content-end col-2">
        {props.price} $
      </span>
      <AddBtn
        onClickAdd={props.onClickAdd}
        // onAdd={addItem}
        // available={available}
        itemID={props.id}
        shoppingCart={props.shoppingCart}
      />
    </div>
  );
};

export default ListItem;
