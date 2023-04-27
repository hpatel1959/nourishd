import React, { useState, useEffect } from "react";
import MealHistoryListItem from "./MealHistoryListItem";
import { removeMealFromTracker, fetchDayData } from "../../helpers/mealHistoryListHelpers";

function MealHistoryList(props) {
  const [mealsArr, setMealsArr] = useState([]);
  const { updateKey, triggerUpdate } = props;

  useEffect(() => {
    fetchDayData(setMealsArr);
  }, [updateKey]);

  return (
    <div className="meal-history-list">
      <h3 className="mb-3">Meal History</h3>
      {mealsArr.length === 0 ? (
        <p className="alert alert-dark empty-nutrients-message">No Meals to display</p>
      ) : (
        <MealHistoryListItem
          mealsArr={mealsArr}
          removeMealFromTracker={removeMealFromTracker}
          triggerUpdate={triggerUpdate}
          fetchDayData={fetchDayData}
        />
      )}
    </div>
  );
}

export default MealHistoryList;
