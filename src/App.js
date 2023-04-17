//REACT-ROUTER-DOM
import { Route, Routes } from "react-router-dom";
import { useState } from 'react';

import "./App.css";

import Navbar from "./components/Navbar";
import Records from "./components/Records/Records";
import Recipes from "./components/Recipes/Recipes";
import Favourites from "./components/Favourites/Favourites";
import SignUp from "./components/Forms/SignUp";
import Login from "./components/Forms/Login";
import Home from "./components/Home";

function App() {

  const [logInStatus, setLogInStatus] = useState(false);
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  return (
      <div className="App">
        <Navbar logInStatus={logInStatus} setLogInStatus={setLogInStatus}/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/records" element={<Records />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/favorites" element={<Favourites />} />
          <Route path="/signup" element={<SignUp setLogInStatus={setLogInStatus} email={email} setEmail={setEmail} password={password} setPassword={setPassword}/>}/>} />
          <Route path="/login" element={<Login setLogInStatus={setLogInStatus} email={email} setEmail={setEmail} password={password} setPassword={setPassword}/>} />
        </Routes>
      </div>
  );
}

export default App;
