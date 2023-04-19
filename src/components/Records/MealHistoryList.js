import React, { useState, useEffect } from "react";
import axios from "axios";
import MealHistoryListItem from "./MealHistoryListItem";

function MealHistoryList() {
  const [mealsArr, setMealsArr] = useState([]);

  const removeMealFromTracker = async (name, id) => {
    const queryName = name.split(" ").join("-");
    const url = `http://localhost:4000/recipes/${queryName}`;
    const requestData = {
      recipe_id: id,
    };

    const response = await axios.get(url, requestData, {
      withCredentials: true,
    });

    if (response.data.success) {
      console.log(response.data);
    } else {
      console.log("Login failed: " + response.data.message);
    }
  };

  const fetchDayData = async () => {
    const url = "http://localhost:4000/dayInfo";

    try {
      const response = await axios.get(url, { withCredentials: true });
      if (response.data.day) {
        const mealHistory = response.data.day.history.map((meal) => {
          return {
            recipeName: Object.keys(meal)[0],
            recipeId: Object.values(meal)[0],
          };
        });
        setMealsArr(mealHistory);
      }
    } catch (error) {
      console.error("Error: " + error.message);
    }
  };

  useEffect(() => {
    fetchDayData();
  }, []);

  return (
    <div>
      <h3>Meal History</h3>
      <MealHistoryListItem
        mealsArr={mealsArr}
        removeMealFromTracker={removeMealFromTracker}
      />
    </div>
  );
}

export default MealHistoryList;
