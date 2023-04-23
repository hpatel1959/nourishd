import React from "react";
import FavouriteList from "./FavouriteList";
import "./Favourites.css";

function Favourites() {
  return (
    <div className="favourites">
      <h3>Favourites</h3>
      <FavouriteList />
    </div>
  );
}

export default Favourites;
