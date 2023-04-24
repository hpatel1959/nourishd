import React from "react";
import useShow from "../../hooks/useShow";
import Card from "../Card";
import { addToMeal, removeFromFavourites } from "../../helpers/favouriteListItemHelpers";

function FavouriteListItem(props) {
  const [value, showValue] = useShow();

  return (
    <div className="favourite-item-card">
      {value && <Card message="Added to Records" className="alert" />}
      <img className="favourite-item-img" src={props.image} alt={props.title} />
      <div className="favourite-card-info">
        <div className="favourite-item-info">
          <div className="favourite-recipe-title-and-ingredients">
            <h4 className="favourite-recipe-title">{props.title}</h4>
          </div>
          <div className="tracker-and-favourite-buttons">
            <button
              className="btn btn-outline-primary add-button"
              onClick={() => addToMeal(props, showValue)}
            >
              <i class="fa-solid fa-plus"></i>
              Add to tracker
            </button>
            <button
              className="btn btn-outline-primary remove-button"
              onClick={() => removeFromFavourites(props.id, props)}
            >
              <i class="fa-solid fa-minus"></i>
              Remove from favourites
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FavouriteListItem;
