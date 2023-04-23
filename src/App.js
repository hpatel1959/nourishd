//REACT-ROUTER-DOM
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";

import Navbar from "./components/Navbar";
import Records from "./components/Records/Records";
import Recipes from "./components/Recipes/Recipes";
import Favourites from "./components/Favourites/Favourites";
import SignUp from "./components/Forms/SignUp";
import Login from "./components/Forms/Login";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  const [logInStatus, setLogInStatus] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const checkIfLoggedIn = async () => {
    const url = "http://localhost:4000/userInfo";

    try {
      const response = await axios.get(url, { withCredentials: true });

      if (response.data.user) {
        setLogInStatus(true);
      } else {
        setLogInStatus(false);
      }
    } catch (error) {
      console.error("Error during login: " + error.message);
    }
  };

  useEffect(() => {
    checkIfLoggedIn();
  }, []);

  return (
    <div className="App">
      <Navbar logInStatus={logInStatus} setLogInStatus={setLogInStatus} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/records" element={<Records />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route
          path="/signup"
          element={
            <SignUp
              setLogInStatus={setLogInStatus}
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
            />
          }
        />
        <Route
          path="/login"
          element={
            <Login
              setLogInStatus={setLogInStatus}
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
            />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
