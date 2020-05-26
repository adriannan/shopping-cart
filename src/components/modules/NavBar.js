import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = props => {

  return (
    <div className="hero container-fluid bg-light">
      <div className="nav-wrapper bg-light">
        <nav className="navbar bg-light fixed-top navbar-expand-lg navbar-light d-flex justify-content-between  mx-auto">
          <NavLink to="/" className="navbar-brand">
            Shopping App
        </NavLink>
          <ul className="navbar-nav d-flex flex-row flex-nowrap justify-content-end">
            <li className="nav-item">
              <NavLink to="/" exact className="nav-link ">
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
    </div>
  );
};

export default NavBar;
