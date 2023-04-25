import axios from "axios";
import React, { useState } from "react";
import Card from "./Card";
import useShow from "../hooks/useShow";

function CustomMealForm(props) {
  const { triggerUpdate, setShowCustomRecipeForm } = props;
  const [mealName, setMealName] = useState("");
  const [calories, setCalories] = useState("");
  const [fat, setFat] = useState("");
  const [protein, setProtein] = useState("");
  const [fiber, setFiber] = useState("");
  const [sugar, setSugar] = useState("");
  const [carbohydrates, setCarbohydrates] = useState("");
  const [value, showValue] = useShow();

  const handleAddMealClick = async (event) => {
    event.preventDefault();

    if (mealName.trim() === "") {
      showValue();
      return;
    }

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

    await axios.post(url, requestData, { withCredentials: true });
    setShowCustomRecipeForm();
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

  return (
    <div className="custom-meal-form card border-0">
      <form method="POST">
        <div className="custom-meal-form-inputs">
          <input
            type="text"
            name="meal-name"
            placeholder="Meal name"
            onChange={handleMealNameChange}
            required
            className="custom-meal-form-input"
          ></input>
          <input
            type="number"
            name="calories"
            placeholder="Calories"
            onChange={handleCalorieChange}
            className="custom-meal-form-input"
          ></input>
          <input
            type="number"
            name="fat"
            placeholder="Fat(g)"
            onChange={handleFatChange}
            className="custom-meal-form-input"
          ></input>
          <input
            type="number"
            name="carbohydrates"
            placeholder="Carbohydrates(g)"
            onChange={handleCarbohydratesChange}
            className="custom-meal-form-input"
          ></input>
          <input
            type="number"
            name="sugar"
            placeholder="Sugar(g)"
            onChange={handleSugarChange}
            className="custom-meal-form-input"
          ></input>
          <input
            type="number"
            name="fiber"
            placeholder="Fiber(g)"
            onChange={handleFiberChange}
            className="custom-meal-form-input"
          ></input>
          <input
            type="number"
            name="protein"
            placeholder="Protein(g)"
            onChange={handleProteinChange}
            className="custom-meal-form-input"
          ></input>
        </div>
        <div className="custom-meal-form-btn-container">
          <button type="submit" onClick={handleAddMealClick} className="btn custom-meal-form-btn">
            <i class="fa-solid fa-plus"></i> <span>Add Meal</span>
          </button>
        </div>
      </form>
      {value && <Card message="Meal name cannot be empty" className="alert" />}
    </div>
  );
}

export default CustomMealForm;
