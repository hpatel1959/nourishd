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
    <div className="mt-4">
      <h3>Meal History</h3>
      <MealHistoryListItem
        mealsArr={mealsArr}
        removeMealFromTracker={removeMealFromTracker}
        triggerUpdate={triggerUpdate}
        fetchDayData={fetchDayData}
      />
    </div>
  );
}

export default MealHistoryList;
