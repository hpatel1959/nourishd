import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import loginLogo from "../../img/login-logo.png";
import axios from "axios";

function Login(props) {
  const { setLogInStatus, email, setEmail, password, setPassword } = props;
  const navigate = useNavigate();
  const [showLoginError, setShowLoginError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const url = "http://localhost:4000/login";

    const requestData = {
      email: email,
      password: password,
    };

    if (email.trim() === "" && password.trim() === "") {
      setShowLoginError(true);
      setErrorMessage("Email and password cannot be empty");
      return;
    }

    if (email.trim() === "") {
      setShowLoginError(true);
      setErrorMessage("Email cannot be empty");
      return;
    }

    if (password.trim() === "") {
      setShowLoginError(true);
      setErrorMessage("Password cannot be empty");
      return;
    }

    try {
      const response = await axios.post(url, requestData, { withCredentials: true });

      if (response.data.success) {
        if (!showLoginError) {
          setShowLoginError(false);
        }
        setLogInStatus(true);
        navigate("/");
      } else {
        setShowLoginError(true);
        setErrorMessage(response.data.message);
      }
    } catch (error) {
      console.error("Error during login: " + error.message);
    }
  };

  return (
    <>
      <div className="element-wrapper">
        <div className="logo-message-container">
          <img className="login-logo" src={loginLogo} alt="login-logo" />
          <p className="login-message">
            Ready to Fuel Your Journey? <strong>Log In.</strong>
          </p>
        </div>
        <div className="login-card">
          <form method="POST" onSubmit={handleSubmit}>
            <div className="form-group input-container">
              <input
                className="form-control"
                type="text"
                name="email"
                placeholder="Email address"
                onChange={handleEmailChange}
              ></input>

              <input
                className="form-control"
                type="password"
                name="password"
                placeholder="Password"
                onChange={handlePasswordChange}
              ></input>

              <button className="btn btn-outline-primary login-button" type="submit">
                Login
              </button>

              {showLoginError && (
                <div className="error-message-container">
                  <p className="alert alert-danger">{errorMessage}</p>
                </div>
              )}

              <p className="forgot-password-message">Forgot Password?</p>

              <button
                className="btn btn-outline-primary create-account-button"
                onClick={() => navigate("/signup")}
              >
                Create an account
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
