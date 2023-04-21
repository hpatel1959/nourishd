import React from "react";
import useShow from "../../hooks/useShow";
import Card from "../Card";
import { addToMeal, removeFromFavourites } from "../../helpers/favouriteListItemHelpers";

function FavouriteListItem(props) {
  const [value, showValue] = useShow();

  return (
    <div className="card col">
      {value && <Card message="Added Records" className="alert" />}
      <img src={props.image} alt={props.title} />
      <h4>{props.title}</h4>
      {/* <ul>
        {props.ingredient_lines.map((ingredient) => (
          <li>{ingredient}</li>
        ))}
      </ul> */}
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
      <button className="btn btn-outline-primary" onClick={() => addToMeal(props, showValue)}>
        Add 1 serving to tracker
      </button>
      <button
        className="btn btn-outline-primary"
        onClick={() => removeFromFavourites(props.id, props)}
      >
        Remove from favourites
      </button>
    </div>
  );
}

export default FavouriteListItem;
