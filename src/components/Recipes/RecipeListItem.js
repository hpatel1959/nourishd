import React, { useState } from "react";
import axios from "axios";
import Card from "../Card";
import useShow from "../../hooks/useShow";

function RecipeListItem(props) {
  const [value, showValue] = useShow();
  const [favouritePopUp, setFavouritePopUp] = useState(false);

  const { addToFavourites, uri } = props;
  const recipeName = props.title;

  function showAlert() {
    setFavouritePopUp(true);
    setTimeout(() => {
      setFavouritePopUp(false);
    }, 2000);
  }

  const addToFavouriteHandler = (recipeName, uri) => {
    addToFavourites(recipeName, uri);
    showAlert();
  };

  const addToMeal = async function () {
    const url = "http://localhost:4000/updateDayInfo";

    const extractIdFromUri = function (uri) {
      return uri.split("#recipe_").pop();
    };

    const extractedId = extractIdFromUri(props.uri);

    const requestData = {
      day: {
        calories: props.caloriesPerServing,
        fat: props.fatPerServing,
        carbohydrates: props.carbohydratesPerServing,
        sodium: props.sodiumPerServing,
        sugar: props.sugarPerServing,
        protein: props.proteinPerServing,
        fiber: props.fiberPerServing,
        potassium: props.potassiumPerServing,
        vitamin_a: props.vitaminAPerServing,
        vitamin_c: props.vitaminCPerServing,
        calcium: props.calciumPerServing,
        iron: props.ironPerServing,
        cholesterol: props.cholesterolPerServing,
        history: { [props.title]: extractedId },
      },
    };

    try {
      const response = await axios.post(url, requestData, {
        withCredentials: true,
      });

      if (response.data.success) {
        console.log("Success");
      } else {
        console.log("Login failed: " + response.data.message);
      }
    } catch (error) {
      console.error("Error during login: " + error.message);
    }
    showValue();
  };

  return (
    <div className="card col">
      {value && <Card message="Added Records" className="alert" />}
      {favouritePopUp && <Card message="Added to Favourites" className="alert" />}
      <img src={props.image} alt={props.title} />
      <h1>{props.title}</h1>
      <ul>
        {props.ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ul>
      <p>Serving Size: {props.yield}</p>
      <p className="badge bg-warning">{props.calories} total calories</p>
      <p className="badge bg-success">
        {Math.floor(props.calories / props.yield)} calories per serving
      </p>
      <button className="btn btn-outline-primary" onClick={addToMeal}>
        Add 1 serving to tracker
      </button>
      <button
        className="btn btn-outline-primary"
        onClick={() => addToFavouriteHandler(recipeName, uri)}
      >
        Add to favourites
      </button>
    </div>
  );
}

export default RecipeListItem;
