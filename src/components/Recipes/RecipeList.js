import React from "react";
import RecipeListItem from "./RecipeListItem";
import axios from "axios";

function RecipeList(props) {
  // const [img, setImg] = useState('');
  // const [title, setTitle] = useState('');
  // const [ingredients, setIngredients] = useState([]);
  // const [dietLabels, setDietLabels] = useState([]);
  // const [healthLabels, setHealthLabels] = useState([]);
  // const [directionsUrl, setdirectionsUrl] = useState('');

  const addToFavourites = async (name, id) => {
    const queryName = name.split(" ").join("-");
    const axiosUrl = `http://localhost:4000/recipes/${queryName}`;
    const requestData = {
      recipe_id: id,
    };

    const response = await axios.get(axiosUrl, {
      params: requestData,
      withCredentials: true,
    });

    if (response.data) {
      console.log(response.data);
    } else {
      console.log("Login failed: " + response.data.message);
    }

    const { label, image, url, dietLabels, healthLabels, ingredientLines } = response.data;

    const requestDataTwo = {
      favourite: {
        recipe_id: id,
        name: label,
        image,
        url,
        diet_labels: dietLabels,
        health_labels: healthLabels,
        ingredient_lines: ingredientLines,
      },
    };

    console.log(requestDataTwo);
    const urlTwo = "http://localhost:4000/favourites";

    try {
      const responseTwo = await axios.post(urlTwo, requestDataTwo, {
        withCredentials: true,
      });

      if (responseTwo.data.favourite) {
        console.log("Success");
      } else {
        console.log("Failed to remove");
      }
    } catch (error) {
      console.error("Error during login: " + error.message);
    }
  };

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

  return <div className="row row-cols-1 row-cols-md-3 g-4">{RecipeListItemArr}</div>;
}

export default RecipeList;
