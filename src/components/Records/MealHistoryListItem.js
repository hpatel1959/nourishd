import React from "react";

function MealHistoryListItem(props) {
  const { mealsArr, removeMealFromTracker, triggerUpdate, fetchDayData } = props;
  console.log(mealsArr);
  const arrOfMealItems = mealsArr.map((meal) => {
    const mealName = meal.recipeName;
    const mealId = meal.recipeId;
    return (
      <div className="meal-history-list-item">
        <div className="meal-history-list-item-name">
          <span>{mealName}</span>
        </div>

        <div>
          {mealId && (
            <i
              className="fa-regular fa-trash-can text-danger h5 pulse"
              role="button"
              onClick={() => removeMealFromTracker(mealName, mealId, triggerUpdate, fetchDayData)}
            ></i>
          )}
        </div>
      </div>
    );
  });

  return <div className="meal-history mb-4">{arrOfMealItems}</div>;
}

export default MealHistoryListItem;
