import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between">
      <div className="container">
        <h1>
          <Link className="text-light" to={"/"}>
            CRUD-REACT, REDUX
          </Link>
        </h1>
      </div>
      <Link
        className="btn btn-danger new-post d-block d-md-inline-block"
        to={"/productos/nuevo"}
        alt="productos"
      >
        Agregar Productos +
      </Link>
    </nav>
  );
};

export default Header;
