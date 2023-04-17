import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";

function Navbar(props) {
  const { logInStatus, setLogInStatus } = props;

  const navigate = useNavigate();
  const logOut = async (e) => {
    e.preventDefault();

    const url = "http://localhost:4000/logout";

    const response = await axios.get(url, { withCredentials: true });
    try {
      if (response.data.success) {
        setLogInStatus(false)
        navigate("/login");
      } else {
        console.log("Login failed: " + response.data.message);
      }
    } catch (error) {
      console.error("Error during login: " + error.message);
    }
  };

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
          {logInStatus ? (
            <button className="btn btn-link nav-link" onClick={logOut}>
              Logout
            </button>
          ) : (
            <NavLink className="nav-link" to="/login">
              Login
            </NavLink>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
