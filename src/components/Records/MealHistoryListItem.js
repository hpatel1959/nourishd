import React from "react";

function MealHistoryListItem(props) {
  const { mealsArr, removeMealFromTracker } = props;

  const arrOfMealItems = mealsArr.map((meal) => {
    const mealName = meal.recipeName;
    const mealId = meal.recipeId;
    return (
      <div className="meal-item">
        <span>{mealName}</span>

        {mealId && (
          <i
            className="fa-regular fa-trash-can text-danger h5"
            role="button"
            onClick={() => removeMealFromTracker(mealName, mealId)}
          ></i>
        )}
      </div>
    );
  });

  return <div className="meal-history mb-4">{arrOfMealItems}</div>;
}

export default MealHistoryListItem;
