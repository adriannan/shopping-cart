import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = props => {
  return (
    <div className="container-fluid bg-dark">
      <nav className="navbar navbar-expand-lg navbar-dark d-flex justify-content-between  ml-auto mr-auto">
        <a href="/" className="navbar-brand ">
          Shopping App
        </a>
        <ul className="navbar-nav d-flex flex-nowrap justify-content-end ">
          <li className="nav-item">
            <NavLink to="/" exact className="nav-link ">
              <i className="fas fa-store"></i>
              Store
            </NavLink>
          </li>
          <li className="nav-item ">
            <NavLink to="/cart" className="nav-link position-relative">
              <i className="fas fa-shopping-cart"></i>
              Cart
              <span className="badge badge-secondary badge-pill position-absolute ">
                {props.items}
              </span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
