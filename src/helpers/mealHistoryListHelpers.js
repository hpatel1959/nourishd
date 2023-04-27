import axios from "axios";

export async function removeMealFromTracker(name, id, triggerUpdate, fetchDayData) {
  const queryName = name.split(" ").join("-");
  const url = `http://localhost:4000/recipes/${queryName}`;
  const requestData = { recipe_id: id };

  try {
    const response = await axios.get(url, { params: requestData, withCredentials: true });

    const { totalNutrients, calories, yield: serving } = response.data;
    const nutrients = {
      calories: -(Math.floor((calories / serving) * 100) / 100),
      fat: -(Math.floor((totalNutrients.FAT.quantity / serving) * 100) / 100),
      carbohydrates: -(Math.floor((totalNutrients.CHOCDF.quantity / serving) * 100) / 100),
      sodium: -parseFloat(totalNutrients.NA.quantity / serving / 1000).toFixed(5),
      sugar: -(Math.floor((totalNutrients.SUGAR.quantity / serving) * 100) / 100),
      protein: -(Math.floor((totalNutrients.PROCNT.quantity / serving) * 100) / 100),
      fiber: -(Math.floor((totalNutrients.FIBTG.quantity / serving) * 100) / 100),
      potassium: -parseFloat(totalNutrients.K.quantity / serving / 1000).toFixed(5),
      vitamin_a: -parseFloat(totalNutrients.VITA_RAE.quantity / serving / 1000000).toFixed(5),
      vitamin_c: -parseFloat(totalNutrients.VITC.quantity / serving / 1000).toFixed(5),
      calcium: -parseFloat(totalNutrients.CA.quantity / serving / 1000).toFixed(5),
      iron: -parseFloat(totalNutrients.FE.quantity / serving / 1000).toFixed(5),
      cholesterol: -parseFloat(totalNutrients.CHOLE.quantity / serving / 1000).toFixed(5),
    };

    const requestDataTwo = {
      day: {
        ...nutrients,
        history: { [name]: id },
      },
    };

    const urlTwo = "http://localhost:4000/removeDayInfo";
    await axios.post(urlTwo, requestDataTwo, { withCredentials: true });
    triggerUpdate();
  } catch (error) {
    console.error("Error during login: " + error.message);
  }

  await fetchDayData();
}

export async function fetchDayData(setMealsArr) {
  const url = "http://localhost:4000/dayInfo";

  try {
    const response = await axios.get(url, { withCredentials: true });
    if (response.data.day) {
      const mealHistory = response.data.day.history.map((meal) => ({
        recipeName: Object.keys(meal)[0],
        recipeId: Object.values(meal)[0],
      }));
      setMealsArr(mealHistory);
    }
  } catch (error) {
    console.error("Error: " + error.message);
  }
}
