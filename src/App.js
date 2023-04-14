//REACT-ROUTER-DOM
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <p className="badge bg-warning">Home Page</p>
      <Navbar />
    </div>
  );
}

export default App;
