import React from "react";
import useShow from "../../hooks/useShow";
import Card from "../Card";
import { addToMeal, removeFromFavourites } from "../../helpers/favouriteListItemHelpers";

function FavouriteListItem(props) {
  const [value, showValue] = useShow();

  return (
    // <div className="card col">
    //   {value && <Card message="Added Records" className="alert" />}
    //   <img src={props.image} alt={props.title} />
    //   <h4>{props.title}</h4>
    //   {/* <ul>
    //     {props.ingredient_lines.map((ingredient) => (
    //       <li>{ingredient}</li>
    //     ))}
    //   </ul> */}
    //   {/* <div className="row row-cols-1 row-cols-md-3 g-4">
    //     {props.diet_labels.map((dietLabel) => (
    //       <span className="badge rounded-pill bg-success">{dietLabel}</span>
    //     ))}
    //   </div> */}

    //   {/* <div className="row row-cols-1 row-cols-md-3 g-4">
    //     {props.health_labels.map((healthLabel) => (
    //       <span className="badge rounded-pill bg-warning">{healthLabel}</span>
    //     ))}
    //   </div> */}

    //   {/* <p className="badge bg-success">
    //     {Math.floor(props.calories / props.yield)} calories per serving
    //   </p> */}
    //   <button className="btn btn-outline-primary" onClick={() => addToMeal(props, showValue)}>
    //     Add 1 serving to tracker
    //   </button>
    // <button
    //   className="btn btn-outline-primary"
    //   onClick={() => removeFromFavourites(props.id, props)}
    // >
    //   Remove from favourites
    // </button>
    // </div>

    <div className="recipe-item-card">
      {value && <Card message="Added Records" className="alert" />}
      <img className="recipe-item-img" src={props.image} alt={props.title} />
      <div className="recipe-card-info">
        <div className="recipe-item-info">
          <div className="recipe-title-and-ingredients">
            <h4 className="recipe-title">{props.title}</h4>
          </div>
          {/* <div className="recipe-calorie-badges">
              <p className="badge bg-success calorie-badge">
                {Math.floor(props.calories / props.yield)} calories per serving
              </p>
            </div> */}
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
