import React, { useState } from "react";
import Card from "../Card";
import useShow from "../../hooks/useShow";
import { addToMeal } from "../../helpers/recipeListItemHelpers";

function RecipeListItem(props) {
  const [value, showValue] = useShow();
  const [favouritePopUp, setFavouritePopUp] = useState(false);
  const [showIngredients, setShowIngredients] = useState(false);

  const { addToFavourites, uri } = props;
  const recipeName = props.title;

  function showAlert() {
    setFavouritePopUp(true);
    setTimeout(() => {
      setFavouritePopUp(false);
    }, 2000);
  }

  const handleShowIngredientsClick = function () {
    if (!showIngredients) {
      setShowIngredients(true);
    } else {
      setShowIngredients(false);
    }
  };

  const addToFavouriteHandler = (recipeName, uri) => {
    addToFavourites(recipeName, uri);
    showAlert();
  };

  return (
    <div className="recipe-item-card">
      {value && <Card message="Added Records" className="alert" />}
      {favouritePopUp && <Card message="Added to Favourites" className="alert" />}
      <img className="recipe-item-img" src={props.image} alt={props.title} />
      <div className="recipe-card-info">
        {showIngredients ? (
          <div className="ingredient-list-and-button">
            <ul className="ingredient-list">
              {props.ingredients.map((ingredient) => (
                <li>{ingredient.text}</li>
              ))}
            </ul>

            <button
              className="btn btn-outline-primary hide-button"
              onClick={() => handleShowIngredientsClick()}
            >
              Hide ingredients
            </button>
          </div>
        ) : (
          <div className="recipe-item-info">
            <div className="recipe-title-and-ingredients">
              <h4 className="recipe-title">{props.title}</h4>
              <div className="see-ingredients-button" onClick={() => handleShowIngredientsClick()}>
                See ingredients
              </div>
            </div>
            <div className="recipe-calorie-badges">
              <p className="badge bg-success calorie-badge">
                {Math.floor(props.calories / props.yield)} calories per serving
              </p>
            </div>
            <div className="tracker-and-favourite-buttons">
              <button
                className="btn btn-outline-primary add-button"
                onClick={() => addToMeal(props, showValue)}
              >
                <i className="fa-solid fa-plus"></i>
                Add to tracker
              </button>
              <button
                className="btn btn-outline-primary add-button"
                onClick={() => addToFavouriteHandler(recipeName, uri)}
              >
                <i className="fa-solid fa-plus"></i>
                Add to favourites
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default RecipeListItem;
