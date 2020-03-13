import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="d-flex flex-column align-items-center">
      <h3>Page not found</h3>
      <h4>
        <i class="far fa-sad-tear"></i>
      </h4>
      <p>
        Please, back to the previous page or go to our
        <Link to="/" className="home__link">
          Store
        </Link>
        .
      </p>
    </div>
  );
};

export default ErrorPage;
