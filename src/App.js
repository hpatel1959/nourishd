//REACT-ROUTER-DOM
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";

import Navbar from "./components/Navbar";
import Records from "./components/Records/Records";
import Recipes from "./components/Recipes/Recipes";
import Favourites from "./components/Favourites/Favourites";
import Forms from "./components/Forms/Forms";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <p className="badge bg-warning">test</p>
        <Routes>
          <Route exact path="/" />
          <Route path="/records" element={<Records />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/favorites" element={<Favourites />} />
          <Route path="/form" element={<Forms />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
