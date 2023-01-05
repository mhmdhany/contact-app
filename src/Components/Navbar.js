import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    // Setup Navbar
    <nav className="navbar bg-dark expand-md navbar-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Contact App
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
