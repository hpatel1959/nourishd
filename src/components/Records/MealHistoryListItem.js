import React, { useState } from "react";
import axios from "axios";

function MealHistoryListItem() {
  const [mealsArr, setMealsArr] = useState([]);

  const fetchDayData = async () => {
    const url = "http://localhost:4000/dayInfo";

    try {
      const response = await axios.get(url, { withCredentials: true });
      // console.log(response.data.day);
      if (response.data.day) {
        console.log(response.data.day);
      }
    } catch (error) {
      console.error("Error: " + error.message);
    }
  };
  return (
    <div>
      <p>MealHistoryListItem</p>
      <button onClick={fetchDayData}>Click</button>
    </div>
  );
}

export default MealHistoryListItem;
