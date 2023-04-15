import React from "react";

function RecipeListItem(props) {
  return (
    <div className="card col">
      <img src={props.image} alt={props.title} />
      <h1>{props.title}</h1>
      <ul>
        {props.ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ul>
      <p className="badge bg-warning">{props.calories} calories</p>
    </div>
  );
}

export default RecipeListItem;
