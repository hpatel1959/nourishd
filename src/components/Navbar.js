import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-warning">
      <Link className="m-3" to="/">
        Home
      </Link>
      <Link className="m-3" to="/records">
        Records
      </Link>
      <Link className="m-3" to="/recipes">
        Recipes
      </Link>
      <Link className="m-3" to="/favourites">
        Favourites
      </Link>
      <Link className="m-3" to="/Forms">
        Forms
      </Link>
    </nav>
  );
}

export default Navbar;
