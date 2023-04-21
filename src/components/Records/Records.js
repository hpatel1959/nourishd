import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import UserInfo from "./UserInfo";
import NutrientList from "./NutrientList";
import MealHistoryList from "./MealHistoryList";
import CustomMealForm from "../CustomMealForm";
import useToggle from "../../hooks/useToggle";

function Records() {
  const [updateKey, setUpdateKey] = useState(0);
  const [userData, setUserData] = useState({});
  // const [showCustomRecipeForm, setShowCustomRecipeForm] = useState(false);
  const [value, toggleValue] = useToggle(false);

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

  // const handleCustomMealClick = () => {
  //   setShowCustomRecipeForm(true);
  // };

  useEffect(() => {
    fetchUserData();
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
          <button className="btn btn-outline-success" onClick={toggleValue}>
            {!value ? "Add Custom Meal" : "Hide"}
          </button>
          {value && (
            <CustomMealForm triggerUpdate={triggerUpdate} setShowCustomRecipeForm={toggleValue} />
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
