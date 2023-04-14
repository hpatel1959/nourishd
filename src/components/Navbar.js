import React from "react";
import { Routes, Route } from 'react-router-dom'
import Record from "./Records/Record";

function Navbar() {
  return (
    <div>
      <Routes>
        <Route exact path='/records' element={<Record />}/>
      </Routes>
    </div>
  );
}

export default Navbar;
