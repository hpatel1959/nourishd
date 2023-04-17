import { React, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup(props) {

  const { setLogInStatus, email, setEmail, password, setPassword } = props;
  const [username, setUsername] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');
  const [sex, setSex] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleHeightChange = (event) => {
    setHeight(event.target.value);
  }

  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  }

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  }

  const handlePasswordConfirmationChange = (event) => {
    setPasswordConfirmation(event.target.value);
  }

  const handleSexChange = (event) => {
    setSex(event.target.value);
  }

  const handleSubmit = async (event) => {

    event.preventDefault();

    const url = 'http://localhost:4000/users'

    const requestData = {
      user: {
        username,
        email,
        password,
        height,
        weight,
        age,
        sex
      }
    };

    try {
      const response = await axios.post(url, requestData, { withCredentials: true });

      if (response.data.success) {
        setLogInStatus(true)
        navigate("/");
      } else {
        console.log("Login failed: " + response.data.message);
      }
    } catch (error) {
        console.error("Error during login: " + error.message);
    };

  }



  return (
    <>
    <div>
      <p>Sign Up!</p>
      <form method="POST" onSubmit={handleSubmit}>
      <input type="text" name="username" placeholder="Username" onChange={handleUsernameChange}></input>
      <input type="text" name="email" placeholder="Email address" onChange={handleEmailChange}></input>
      <input type="text" name="password" placeholder="Password" onChange={handlePasswordChange}></input>
      <input type="text" name="passwordConfirmation" placeholder="Confirm password" onChange={handlePasswordConfirmationChange}></input>
      <input type="number" name="height" placeholder="Height" onChange={handleHeightChange}></input>
      <input type="number" name="weight" placeholder="Weight" onChange={handleWeightChange}></input>
      <input type="number" name="age" placeholder="Age" onChange={handleAgeChange}></input>
      <div>
        <input type="radio" id="male" name="sex" value="male" onChange={handleSexChange}></input>
        <label htmlFor="male">Male</label>
        <input type="radio" id="female" name="sex" value="female" onChange={handleSexChange}></input>
        <label htmlFor="female">Female</label>
      </div>
      <button type="submit">Sign up</button>
      </form>
    </div>
    </>
  );
}

export default Signup;
