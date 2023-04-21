import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import UserInfo from "./UserInfo";
import NutrientList from "./NutrientList";
import MealHistoryList from "./MealHistoryList";

function Records() {
  const [updateKey, setUpdateKey] = useState(0);
  const [userData, setUserData] = useState({});
  const [showCustomRecipeForm, setShowCustomRecipeForm] = useState(false);
  const [mealName, setMealName] = useState("");
  const [calories, setCalories] = useState("");
  const [fat, setFat] = useState("");
  const [protein, setProtein] = useState("");
  const [fiber, setFiber] = useState("");
  const [sugar, setSugar] = useState("");
  const [carbohydrates, setCarbohydrates] = useState("");

  const navigate = useNavigate();

  const triggerUpdate = () => {
    setUpdateKey((prevKey) => prevKey + 1);
  };

  const fetchUserData = async () => {
    const url = "http://localhost:4000/userInfo";

    try {
      const response = await axios.get(url, { withCredentials: true });
      setUserData(response.data.user);
    } catch (error) {
      console.error("Error: " + error.message);
    }
  };

  const handleCustomMealClick = () => {
    setShowCustomRecipeForm(true);
  };

  const handleAddMealClick = async (event) => {
    event.preventDefault();
    setShowCustomRecipeForm(false);

    const url = "http://localhost:4000/addCustomMealNutrients";

    const requestData = {
      day: {
        calories,
        fat,
        carbohydrates,
        sugar,
        protein,
        fiber,
        history: { [mealName]: null },
      },
    };

    const response = await axios.post(url, requestData, { withCredentials: true });

    if (response.data.success) {
      console.log("Saved");
    } else {
      console.log("Failed");
    }

    triggerUpdate();
  };

  const handleMealNameChange = (event) => {
    setMealName(event.target.value);
  };

  const handleCalorieChange = (event) => {
    setCalories(event.target.value);
  };

  const handleCarbohydratesChange = (event) => {
    setCarbohydrates(event.target.value);
  };

  const handleFatChange = (event) => {
    setFat(event.target.value);
  };

  const handleSugarChange = (event) => {
    setSugar(event.target.value);
  };

  const handleFiberChange = (event) => {
    setFiber(event.target.value);
  };

  const handleProteinChange = (event) => {
    setProtein(event.target.value);
  };

  useEffect(() => {
    fetchUserData(); // Invoke the async function within useEffect
  }, [updateKey]);

  return (
    <div>
      {userData ? (
        <>
          <h3>User Details</h3>
          <UserInfo userData={userData} />
          <h3>Daily Intakes</h3>
          <NutrientList userData={userData} updateKey={updateKey} />
          <button className="btn btn-outline-success" onClick={() => navigate("/recipes")}>
            Add Meal from Recipes
          </button>
          <button className="btn btn-outline-success" onClick={handleCustomMealClick}>
            Add Custom Meal
          </button>
          {showCustomRecipeForm && (
            <form method="POST">
              <input
                type="text"
                name="meal-name"
                placeholder="Meal name"
                onChange={handleMealNameChange}
              ></input>
              <input
                type="number"
                name="calories"
                placeholder="Calories"
                onChange={handleCalorieChange}
              ></input>
              <input
                type="number"
                name="fat"
                placeholder="Fat(g)"
                onChange={handleFatChange}
              ></input>
              <input
                type="number"
                name="carbohydrates"
                placeholder="Carbohydrates(g)"
                onChange={handleCarbohydratesChange}
              ></input>
              <input
                type="number"
                name="sugar"
                placeholder="Sugar(g)"
                onChange={handleSugarChange}
              ></input>
              <input
                type="number"
                name="fiber"
                placeholder="Fiber(g)"
                onChange={handleFiberChange}
              ></input>
              <input
                type="number"
                name="protein"
                placeholder="Protein(g)"
                onChange={handleProteinChange}
              ></input>
              <button type="submit" onClick={handleAddMealClick}>
                Add Meal
              </button>
            </form>
          )}

          <MealHistoryList updateKey={updateKey} triggerUpdate={triggerUpdate} />
        </>
      ) : (
        <p>Please log in</p>
      )}
    </div>
  );
}

export default Records;
