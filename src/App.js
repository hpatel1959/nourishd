//REACT-ROUTER-DOM
import { Route, Routes } from "react-router-dom";

import "./App.css";

import Navbar from "./components/Navbar";
import Records from "./components/Records/Records";
import Recipes from "./components/Recipes/Recipes";
import Favourites from "./components/Favourites/Favourites";
import SignUp from "./components/Forms/SignUp";
import Login from "./components/Forms/Login";
import Home from "./components/Home";

function App() {
  return (
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/records" element={<Records />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/favorites" element={<Favourites />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
  );
}

export default App;
