import React from "react";

const NavBar = props => {
  return (
    <div className="container-fluid bg-dark">
      <nav className="navbar navbar-expand-lg navbar-dark d-flex justify-content-between  ml-auto mr-auto">
        <a className="navbar-brand" href="">
          Shopping App
        </a>
        <ul className="navbar-nav d-flex flex-nowrap">
          <li className="nav-item">
            <a className="nav-link" href="">
              <i className="fas fa-store"></i>
              Store
            </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link " href="">
              <i className="fas fa-shopping-cart"></i>
              Cart
              <span className="badge badge-secondary badge-pill ">
                {props.items}
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
