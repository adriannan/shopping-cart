import React from "react";

const ListHeader = props => {
  return (
    <div className="container-fluid d-flex justify-content-between text-uppercase navbar navbar-expand-lg navbar-light bg-light">
      <h3 className="list_tit d-flex align-items-center col-md-6 font-weight-bold">
        product
      </h3>
      <span className="list_price d-flex align-items-center justify-content-center col-md-2 col-10 font-weight-bold">
        price
      </span>
      <span className="list_price d-flex align-items-center justify-content-center col-md-2 col-10 font-weight-bold">
        action
      </span>
    </div>
  );
};

export default ListHeader;
