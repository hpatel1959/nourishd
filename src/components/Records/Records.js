import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserInfo from "./UserInfo";
import NutrientList from "./NutrientList";
import MealHistoryList from "./MealHistoryList";
import CustomMealForm from "../CustomMealForm";
import useToggle from "../../hooks/useToggle";
import { fetchUserData } from "../../helpers/recordsHelper";

import "./Records.css";

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
    <div className="record">
      {userData ? (
        <>
          <div className="user">
            <UserInfo userData={userData} />
          </div>
          <div className="nutrient">
            <h3 className="my-3">Nutrition</h3>
            <NutrientList userData={userData} updateKey={updateKey} />{" "}
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
