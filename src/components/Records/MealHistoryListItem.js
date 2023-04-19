import React from "react";

function MealHistoryListItem(props) {
  const { mealsArr, removeMealFromTracker } = props;

  const arrOfMealItems = mealsArr.map((meal) => {
    const mealName = meal.recipeName;
    const mealId = meal.recipeId;
    return (
      <div className="meal-item">
        {mealName}
        <button
          onClick={() => removeMealFromTracker(mealName, mealId)}
          className="btn btn-outline-danger"
        >
          Remove from tracker
        </button>
      </div>
    );
  });

  return <div className="meal-history mb-4">{arrOfMealItems}</div>;
}

export default MealHistoryListItem;
