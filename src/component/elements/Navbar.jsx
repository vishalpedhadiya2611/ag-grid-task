import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Home
        </Link>
        <div>
          <Link to="contact/add" className="btn btn-light ml-auto">
            Create New Item
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
