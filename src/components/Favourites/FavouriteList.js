import React, { useEffect, useState } from "react";
import FavouriteListItem from "./FavouriteListItem";
import { fetchFavouriteRecipes } from "../../helpers/favouriteListHelpers";

function FavouriteList() {
  const [favouriteRecipes, setFavouriteRecipes] = useState([]);

  useEffect(() => {
    fetchFavouriteRecipes(setFavouriteRecipes);
  }, []);

  const FavouriteListItemArr = favouriteRecipes.map((recipe) => {
    const { id, diet_labels, health_labels, image, ingredient_lines, name, recipe_id } = recipe;

    return (
      <FavouriteListItem
        key={id}
        id={id}
        diet_labels={diet_labels}
        health_labels={health_labels}
        image={image}
        title={name}
        ingredient_lines={ingredient_lines}
        recipe_id={recipe_id}
        setFavouriteRecipes={setFavouriteRecipes}
      />
    );
  });

  return <div className="favourite-item-container">{FavouriteListItemArr}</div>;
}

export default FavouriteList;
