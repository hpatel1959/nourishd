import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../img/logo-img.jpg";
import { useState } from "react";

function Navbar(props) {
  const { logInStatus, setLogInStatus } = props;

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const navigate = useNavigate();
  const logOut = async (e) => {
    e.preventDefault();

    const url = "http://localhost:4000/logout";

    const response = await axios.get(url, { withCredentials: true });
    try {
      if (response.data.success) {
        setLogInStatus(false);
        navigate("/");
      } else {
        console.log("Login failed: " + response.data.message);
      }
    } catch (error) {
      console.error("Error during login: " + error.message);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid navbar-contents">
        <div className="row align-items-center nav-item-container">
          <div className="col logo-wrapper">
            <NavLink className="navbar-brand" to="/">
              <img src={logo} alt="logo" className="logo" />
            </NavLink>
          </div>

          <div className="col btn-wrapper">
            <button className="navbar-toggler" type="button" onClick={toggle}>
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>

        <div className={`collapse navbar-collapse ${isOpen && "show"} navbar-list-wrapper`}>
          <ul className="navbar-nav ms-auto navbar-list">
            <li className="nav-item">
              <NavLink className="nav-link" exact activeClassName="active" to="/" onClick={toggle}>
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="/recipes" onClick={toggle}>
                Recipes
              </NavLink>
            </li>

            {logInStatus ? (
              <>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    activeClassName="active"
                    to="/favourites"
                    onClick={toggle}
                  >
                    Favourites
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    activeClassName="active"
                    to="/records"
                    onClick={toggle}
                  >
                    Records
                  </NavLink>
                </li>

                <li className="nav-item">
                  <button className="btn btn-link nav-link mx-auto" onClick={logOut}>
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    activeClassName="active"
                    to="/login"
                    onClick={toggle}
                  >
                    Login
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    activeClassName="active"
                    to="/signup"
                    onClick={toggle}
                  >
                    Sign Up
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
