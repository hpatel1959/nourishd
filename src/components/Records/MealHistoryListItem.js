import React, { useState, useEffect } from "react";
import axios from "axios";

function MealHistoryListItem() {
  const [mealsArr, setMealsArr] = useState([]);

  const fetchDayData = async () => {
    const url = "http://localhost:4000/dayInfo";

    try {
      const response = await axios.get(url, { withCredentials: true });
      if (response.data.day) {
        const mealHistory = response.data.day.history.map((meal) => {
          return Object.keys(meal)[0];
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
      <p>{mealsArr}</p>
    </div>
  );
}

export default MealHistoryListItem;
