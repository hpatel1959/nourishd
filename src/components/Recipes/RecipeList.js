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

  return <div>{RecipeListItemArr}</div>;
}

export default RecipeList;
