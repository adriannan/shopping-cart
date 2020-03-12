import React from "react";

const List = ({ load, list }) => {
  return (
    <div className="container-list container-fluid ">
      <ul className="list-group">{list}</ul>
      <button
        className="btn-load btn btn-light btn-block col-3 mx-auto"
        onClick={load}
      >
        Load More
      </button>
    </div>
  );
};

export default List;
