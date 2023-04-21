import React, { useEffect, useState } from "react";
import FavouriteListItem from "./FavouriteListItem";
import axios from "axios";

function FavouriteList() {
  const [favouriteRecipes, setFavouriteRecipes] = useState([]);

  const fetchFavouriteRecipes = async () => {
    const url = "http://localhost:4000/userFavourites";

    const response = await axios.get(url, {
      withCredentials: true,
    });

    if (response.data.success) {
      // console.log(response.data);
    } else {
      // console.log("Failed to fetch data!");
    }

    setFavouriteRecipes(response.data.recipe);
  };

  useEffect(() => {
    fetchFavouriteRecipes();
  }, []);

  const FavouriteListItemArr = favouriteRecipes.map((recipe) => {
    const { diet_labels, health_labels, image, ingredient_lines, name, recipe_id } = recipe;

    return (
      <FavouriteListItem
        key={recipe_id}
        diet_labels={diet_labels}
        health_labels={health_labels}
        image={image}
        title={name}
        ingredient_lines={ingredient_lines}
        recipe_id={recipe_id}
      />
    );
  });

  return <div className="row row-cols-1 row-cols-md-3 g-4">{FavouriteListItemArr}</div>;
}

export default FavouriteList;
