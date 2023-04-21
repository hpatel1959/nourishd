import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserInfo from "./UserInfo";
import NutrientList from "./NutrientList";
import MealHistoryList from "./MealHistoryList";
import CustomMealForm from "../CustomMealForm";
import useToggle from "../../hooks/useToggle";
import { fetchUserData } from "../../helpers/recordsHelper";

function Records() {
  const [updateKey, setUpdateKey] = useState(0);
  const [userData, setUserData] = useState({});
  const [value, toggleValue] = useToggle(false);
  const navigate = useNavigate();

  const triggerUpdate = () => {
    setUpdateKey((prevKey) => prevKey + 1);
  };

  useEffect(() => {
    fetchUserData(setUserData);
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
