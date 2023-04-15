import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand bg-warning flex-column">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/records">
            Records
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/recipes">
            Recipes
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/favourites">
            Favourites
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/signup">
            Sign Up
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/login">
            Login
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/logout">
            Logout
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
