import React from "react";
import RecipeListItem from "./RecipeListItem";

function RecipeList(props) {
  const RecipeListItemArr = props.recipes.map((recipe) => (
    <RecipeListItem
      key={recipe.recipe.label}
      title={recipe.recipe.label}
      uri={recipe.recipe.uri}
      image={recipe.recipe.image}
      ingredients={recipe.recipe.ingredients}
      calories={Math.floor(recipe.recipe.calories)}
      yield={recipe.recipe.yield}
      caloriesPerServing={recipe.recipe.calories / recipe.recipe.yield}
      fatPerServing={recipe.recipe.totalNutrients.FAT.quantity / recipe.recipe.yield}
      carbohydratesPerServing={recipe.recipe.totalNutrients.CHOCDF.quantity / recipe.recipe.yield}
      sodiumPerServing={parseFloat(
        (recipe.recipe.totalNutrients.NA.quantity / recipe.recipe.yield / 1000).toFixed(5)
      )}
      sugarPerServing={recipe.recipe.totalNutrients.SUGAR.quantity / recipe.recipe.yield}
      proteinPerServing={recipe.recipe.totalNutrients.PROCNT.quantity / recipe.recipe.yield}
      fiberPerServing={recipe.recipe.totalNutrients.FIBTG.quantity / recipe.recipe.yield}
      potassiumPerServing={recipe.recipe.totalNutrients.K.quantity / recipe.recipe.yield / 1000}
      vitaminAPerServing={
        recipe.recipe.totalNutrients.VITA_RAE.quantity / recipe.recipe.yield / 1000000
      }
      vitaminCPerServing={recipe.recipe.totalNutrients.VITC.quantity / recipe.recipe.yield / 1000}
      calciumPerServing={parseFloat(
        (recipe.recipe.totalNutrients.CA.quantity / recipe.recipe.yield / 1000).toFixed(5)
      )}
      ironPerServing={recipe.recipe.totalNutrients.FE.quantity / recipe.recipe.yield / 1000}
      cholesterolPerServing={parseFloat(
        (recipe.recipe.totalNutrients.CHOLE.quantity / recipe.recipe.yield / 1000).toFixed(5)
      )}
    />
  ));

  return <div className="row row-cols-1 row-cols-md-3 g-4">{RecipeListItemArr}</div>;
}

export default RecipeList;
