import React from "react";
import axios from "axios";

function FavouriteListItem(props) {
  const addToMeal = async function () {
    const queryName = props.title.split(" ").join("-");
    const urlOne = `http://localhost:4000/recipes/${queryName}`;

    const requestDataOne = {
      recipe_id: props.recipe_id,
    };
    const nutrientInfo = await axios(urlOne, {
      params: requestDataOne,
      withCredentials: true,
    });

    const urlTwo = "http://localhost:4000/updateDayInfo";

    const {
      label,
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
    } = nutrientInfo.data;

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

    const requestDataTwo = {
      day: {
        calories: caloriesPerServing,
        fat: fatPerServing,
        carbohydrates: carbohydratesPerServing,
        sodium: sodiumPerServing,
        sugar: sugarPerServing,
        protein: proteinPerServing,
        fiber: fiberPerServing,
        potassium: potassiumPerServing,
        vitamin_a: vitaminAPerServing,
        vitamin_c: vitaminCPerServing,
        calcium: calciumPerServing,
        iron: ironPerServing,
        cholesterol: cholesterolPerServing,
        history: { [label]: props.recipe_id },
      },
    };

    const result = await axios.post(urlTwo, requestDataTwo, {
      withCredentials: true,
    });
    console.log("🚨");
    console.log(result);
    console.log("🚨");
  };

  const removeFromFavourites = async (recipeId) => {
    const url = `http://localhost:4000/favourites/${recipeId}`;
    const requestData = {
      recipe_id: recipeId,
    };

    await axios
      .delete(url, requestData, { withCredentials: true })
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));
  };

  return (
    <div className="card col">
      <img src={props.image} alt={props.title} />
      <h1>{props.title}</h1>
      <ul>
        {props.ingredient_lines.map((ingredient) => (
          <li>{ingredient}</li>
        ))}
      </ul>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {props.diet_labels.map((dietLabel) => (
          <span className="badge rounded-pill bg-success">{dietLabel}</span>
        ))}
      </div>

      <div className="row row-cols-1 row-cols-md-3 g-4">
        {props.health_labels.map((healthLabel) => (
          <span className="badge rounded-pill bg-warning">{healthLabel}</span>
        ))}
      </div>

      {/* <p className="badge bg-success">
        {Math.floor(props.calories / props.yield)} calories per serving
      </p> */}
      <button className="btn btn-outline-primary" onClick={addToMeal}>
        Add 1 serving to tracker
      </button>
      <button
        className="btn btn-outline-primary"
        onClick={() => removeFromFavourites(props.recipe_id)}
      >
        Remove from favourites
      </button>
    </div>
  );
}

export default FavouriteListItem;
