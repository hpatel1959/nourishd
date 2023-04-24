import React from "react";
import RecipeListItem from "./RecipeListItem";
import { addToFavourites } from "../../helpers/recipeListHelpers";

function RecipeList(props) {
  const RecipeListItemArr = props.recipes.map((recipe) => {
    const {
      label,
      uri,
      image,
      ingredients,
      calories,
      yield: serving,
      totalNutrients: {
        FAT: { quantity: fat },
        CHOCDF: { quantity: carbohydrates },
        NA: { quantity: sodium },
        SUGAR: { quantity: sugar },
        PROCNT: { quantity: protein },
        FIBTG: { quantity: fiber },
        K: { quantity: potassium },
        VITA_RAE: { quantity: vitaminA },
        VITC: { quantity: vitaminC },
        CA: { quantity: calcium },
        FE: { quantity: iron },
        CHOLE: { quantity: cholesterol },
      },
    } = recipe.recipe;

    const caloriesPerServing = calories / serving;
    const fatPerServing = fat / serving;
    const carbohydratesPerServing = carbohydrates / serving;
    const sodiumPerServing = sodium / serving / 1000;
    const sugarPerServing = sugar / serving;
    const proteinPerServing = protein / serving;
    const fiberPerServing = fiber / serving;
    const potassiumPerServing = potassium / serving / 1000;
    const vitaminAPerServing = vitaminA / serving / 1000000;
    const vitaminCPerServing = vitaminC / serving / 1000;
    const calciumPerServing = calcium / serving / 1000;
    const ironPerServing = iron / serving / 1000;
    const cholesterolPerServing = cholesterol / serving / 1000;

    return (
      <RecipeListItem
        key={label}
        title={label}
        uri={uri}
        image={image}
        ingredients={ingredients}
        calories={Math.floor(calories)}
        yield={serving}
        caloriesPerServing={caloriesPerServing}
        fatPerServing={fatPerServing}
        carbohydratesPerServing={carbohydratesPerServing}
        sodiumPerServing={parseFloat(sodiumPerServing.toFixed(5))}
        sugarPerServing={sugarPerServing}
        proteinPerServing={proteinPerServing}
        fiberPerServing={fiberPerServing}
        potassiumPerServing={potassiumPerServing}
        vitaminAPerServing={vitaminAPerServing}
        vitaminCPerServing={vitaminCPerServing}
        calciumPerServing={parseFloat(calciumPerServing.toFixed(5))}
        ironPerServing={ironPerServing}
        cholesterolPerServing={parseFloat(cholesterolPerServing.toFixed(5))}
        addToFavourites={addToFavourites}
      />
    );
  });

  return <div className="recipe-item-container">{RecipeListItemArr}</div>;
}

export default RecipeList;
