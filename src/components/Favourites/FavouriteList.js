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

    if (recipe) {
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
    } else {
      return null;
    }
  });

  return (
    <div>
      {FavouriteListItemArr && FavouriteListItemArr.length > 0 ? (
        <div className="favourite-item-container">{FavouriteListItemArr}</div>
      ) : (
        <div className="no-favourite-message-container">
          <div className="alert alert-dark no-favourite-message">
            You currently have no favourited recipes.
          </div>
          <p className="no-favourite-message">
            Head over to the{" "}
            <a className="recipes-link" href="/recipes">
              recipes
            </a>{" "}
            tab to add some favourites and then come back to view them!
          </p>
        </div>
      )}
    </div>
  );
}

export default FavouriteList;
