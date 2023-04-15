import React from "react";
import RecipeListItem from "./RecipeListItem";

function RecipeList(props) {
  const RecipeListItemArr = props.recipes.map((recipe) => (
    <RecipeListItem
      key={recipe.recipe.label}
      title={recipe.recipe.label}
      image={recipe.recipe.image}
      ingredients={recipe.recipe.ingredients}
      calories={Math.floor(recipe.recipe.calories)}
    />
  ));

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">{RecipeListItemArr}</div>
  );
}

export default RecipeList;
