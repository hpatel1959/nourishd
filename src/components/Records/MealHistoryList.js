import React, { useState, useEffect } from "react";
import axios from "axios";
import MealHistoryListItem from "./MealHistoryListItem";

function MealHistoryList(props) {
  const [mealsArr, setMealsArr] = useState([]);
  const { triggerUpdate } = props;
  // ------------------------------------------------
  const removeMealFromTracker = async (name, id) => {
    const queryName = name.split(" ").join("-");
    const url = `http://localhost:4000/recipes/${queryName}`;
    const requestData = {
      recipe_id: id,
    };

    const response = await axios.get(url, {
      params: requestData,
      withCredentials: true,
    });

    if (response.data) {
    } else {
      console.log("Login failed: " + response.data.message);
    }

    const { FAT, CHOCDF, NA, SUGAR, PROCNT, FIBTG, K, VITA_RAE, VITC, CA, FE, CHOLE } =
      response.data.totalNutrients;
    const { calories } = response.data;
    const serving = response.data.yield;

    const requestDataTwo = {
      day: {
        calories: -(Math.floor((calories / serving) * 100) / 100),
        fat: -(Math.floor((FAT.quantity / serving) * 100) / 100),
        carbohydrates: -(Math.floor((CHOCDF.quantity / serving) * 100) / 100),
        sodium: -parseFloat(NA.quantity / serving / 1000).toFixed(5),
        sugar: -(Math.floor((SUGAR.quantity / serving) * 100) / 100),
        protein: -(Math.floor((PROCNT.quantity / serving) * 100) / 100),
        fiber: -(Math.floor((FIBTG.quantity / serving) * 100) / 100),
        potassium: -parseFloat(K.quantity / serving / 1000).toFixed(5),
        vitamin_a: -parseFloat(VITA_RAE.quantity / serving / 1000000).toFixed(5),
        vitamin_c: -parseFloat(VITC.quantity / serving / 1000).toFixed(5),
        calcium: -parseFloat(CA.quantity / serving / 1000).toFixed(5),
        iron: -parseFloat(FE.quantity / serving / 1000).toFixed(5),
        cholesterol: -parseFloat(CHOLE.quantity / serving / 1000).toFixed(5),
        history: { [name]: id },
      },
    };

    const urlTwo = "http://localhost:4000/removeDayInfo";

    try {
      const responseTwo = await axios.post(urlTwo, requestDataTwo, {
        withCredentials: true,
      });

      if (responseTwo.data.success) {
        console.log("Success");
      } else {
        console.log("Failed to remove");
      }

      triggerUpdate();
    } catch (error) {
      console.error("Error during login: " + error.message);
    }

    await fetchDayData();
  };
  // ------------------------------------------------
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
      <MealHistoryListItem mealsArr={mealsArr} removeMealFromTracker={removeMealFromTracker} />
    </div>
  );
}

export default MealHistoryList;
