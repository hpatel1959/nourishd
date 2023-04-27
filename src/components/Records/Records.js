import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserInfo from "./UserInfo";
import NutrientList from "./NutrientList";
import MealHistoryList from "./MealHistoryList";
import CustomMealForm from "../CustomMealForm";
import useToggle from "../../hooks/useToggle";
import { fetchUserData } from "../../helpers/recordsHelper";
import axios from "axios";
import "./Records.css";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

function Records() {
  const [updateKey, setUpdateKey] = useState(0);
  const [userData, setUserData] = useState({});
  const [value, toggleValue] = useToggle(false);
  const navigate = useNavigate();

  const triggerUpdate = () => {
    setUpdateKey((prevKey) => prevKey + 1);
  };

  const [calories, setCalories] = useState(0);
  const [fat, setFat] = useState(0);
  const [carbohydrates, setCarbohydrates] = useState(0);
  const [sodium, setSodium] = useState(0);
  const [sugar, setSugar] = useState(0);
  const [protein, setProtein] = useState(0);
  const [fiber, setFiber] = useState(0);
  const [potassium, setPotassium] = useState(0);
  const [vitaminA, setVitaminA] = useState(0);
  const [vitaminC, setVitaminC] = useState(0);
  const [calcium, setCalcium] = useState(0);
  const [iron, setIron] = useState(0);
  const [cholesterol, setCholesterol] = useState(0);

  // const dayData = {
  //   calories,
  //   fat,
  //   carbohydrates,
  //   sodium,
  //   sugar,
  //   protein,
  //   fiber,
  //   potassium,
  //   vitamin_a: vitaminA,
  //   vitamin_c: vitaminC,
  //   calcium,
  //   iron,
  //   cholesterol,
  // };

  const fetchDayData = async () => {
    const url = "http://localhost:4000/dayInfo";

    try {
      const response = await axios.get(url, { withCredentials: true });
      if (response.data.day) {
        setCalories(response.data.day.calories);
        setFat(response.data.day.fat);
        setCarbohydrates(response.data.day.carbohydrates);
        setSodium(response.data.day.sodium * 1000);
        setSugar(response.data.day.sugar);
        setProtein(response.data.day.protein);
        setFiber(response.data.day.fiber);
        setPotassium(response.data.day.potassium * 1000);
        setVitaminA(response.data.day.vitamin_a * 1000000);
        setVitaminC(response.data.day.vitamin_c * 1000);
        setCalcium(response.data.day.calcium * 1000);
        setIron(response.data.day.iron * 1000);
        setCholesterol(response.data.day.cholesterol * 1000);
      }
    } catch (error) {
      console.error("Error: " + error.message);
    }
  };

  const stateGetters = {
    calories,
    fat,
    carbohydrates,
    sodium,
    sugar,
    protein,
    fiber,
    potassium,
    vitaminA,
    vitaminC,
    calcium,
    iron,
    cholesterol,
  };

  const data = {
    labels: ["Fat", "Carbohydrates", "Sugar", "Fiber", "Protein"],
    datasets: [
      {
        label: "Grams: ",
        data: [fat, carbohydrates, sugar, fiber, protein],
        backgroundColor: ["#8ecae6", "#219ebc", "#023047", "#ffb703", "#fb8500"],
        borderColor: ["#8ecae6", "#219ebc", "#023047", "#ffb703", "#fb8500"],
        borderWidth: 1,
      },
    ],
  };

  // Check if all values are less than one
  if (fat < 1 && carbohydrates < 1 && sugar < 1 && fiber < 1 && protein < 1) {
    data.datasets = [];
  }

  const options = {
    aspectRatio: 3,
  };

  useEffect(() => {
    fetchDayData();
  }, [updateKey]);

  useEffect(() => {
    fetchUserData(setUserData);
  }, [updateKey]);

  return (
    <div className="record">
      {userData ? (
        <>
          <div className="user">
            <UserInfo userData={userData} />
          </div>
          <div className="nutrient">
            <h3 className="my-3">Nutrition</h3>
            <NutrientList
              userData={userData}
              updateKey={updateKey}
              stateGetters={stateGetters}
            />{" "}
            <div className="btn-container">
              <button className="btn add-recipes-btn" onClick={() => navigate("/recipes")}>
                <i class="fa-solid fa-plus"></i> <span>Add Meal from Recipes</span>
              </button>
              <button className="btn add-custom-mean-btn" onClick={toggleValue}>
                {!value ? (
                  <>
                    <i class="fa-solid fa-plus"></i>
                    <span>Add Custom Meal</span>
                  </>
                ) : (
                  <span>Hide</span>
                )}
              </button>
            </div>
            <div className="meal-form">
              {value && (
                <CustomMealForm
                  triggerUpdate={triggerUpdate}
                  setShowCustomRecipeForm={toggleValue}
                />
              )}
            </div>
          </div>
          <div className="history">
            <h3 className="my-3">Macros</h3>
            <Doughnut data={data} options={options} />
            <MealHistoryList updateKey={updateKey} triggerUpdate={triggerUpdate} />
          </div>
        </>
      ) : (
        <p>Please log in</p>
      )}
    </div>
  );
}

export default Records;
