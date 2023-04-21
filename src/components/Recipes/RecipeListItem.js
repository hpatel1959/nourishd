import React, { useState } from "react";
import Card from "../Card";
import useShow from "../../hooks/useShow";
import { addToMeal } from "../../helpers/recipeListItemHelpers";

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

  return (
    <div className="card col">
      {value && <Card message="Added Records" className="alert" />}
      {favouritePopUp && <Card message="Added to Favourites" className="alert" />}
      <img src={props.image} alt={props.title} />
      <h4>{props.title}</h4>
      {/* <ul>
        {props.ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ul> */}
      <p>Serving Size: {props.yield}</p>
      <p className="badge bg-warning">{props.calories} total calories</p>
      <p className="badge bg-success">
        {Math.floor(props.calories / props.yield)} calories per serving
      </p>
      <button className="btn btn-outline-primary" onClick={() => addToMeal(props, showValue)}>
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
