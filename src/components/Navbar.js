import axios from "axios";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const logOut = async (e) => {
    e.preventDefault();

    const url = "http://localhost:4000/logout";

    const response = await axios.get(url, { withCredentials: true });
    try {
      if (response.data.success) {
        navigate("/");
      } else {
        console.log("Login failed: " + response.data.message);
      }
    } catch (error) {
      console.error("Error during login: " + error.message);
    }
  };

  const sessionCookie = document.cookie.replace(
    /(?:(?:^|.*;\s*)_nutrition_app_api_session\s*\=\s*([^;]*).*$)|^.*$/,
    "$1"
  );
  const isLoggedIn = sessionCookie !== null;

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
          {isLoggedIn ? (
            <li className="nav-item">
              <button className="btn btn-link nav-link" onClick={logOut}>
                Logout
              </button>
            </li>
          ) : (
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">
                Login
              </NavLink>
            </li>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
