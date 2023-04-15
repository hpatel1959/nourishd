import React from "react";
import { useState} from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

function Login() {
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleSubmit = async (event) => {

    event.preventDefault();

    const url = 'http://localhost:4000/login'

    const requestData = {
      email: email,
      password: password
    };

    try {
      const response = await axios.post(url, requestData, { withCredentials: true });

      if (response.data.success) {
        navigate("/");
      } else {
        console.log("Login failed: " + response.data.message);
      }
    } catch (error) {
        console.error("Error during login: " + error.message);
    };

  }

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  return (
    <>
    <div>
      <p>Log In</p>
      <form method="POST" onSubmit={handleSubmit}>
      <input type="text" name="email" placeholder="Email address" onChange={handleEmailChange}></input>
      <input type="text" name="password" placeholder="Password" onChange={handlePasswordChange}></input>
      <button type="submit">Login</button>
      </form>
    </div>
    </>
  );
}

export default Login;
