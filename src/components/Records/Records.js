import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import UserInfo from "./UserInfo";
import NutrientList from "./NutrientList";
import MealHistoryList from "./MealHistoryList";

function Records() {
  const [updateKey, setUpdateKey] = useState(0);
  const [userData, setUserData] = useState({});
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

  useEffect(() => {
    fetchUserData(); // Invoke the async function within useEffect
  }, []);

  return (
    <div>
      {userData ? (
        <div className="my-4">
          <div>
            <h3>User Details</h3>
            <UserInfo userData={userData} />
          </div>
          <div>
            <h3>Daily Intakes</h3>
            <NutrientList userData={userData} updateKey={updateKey} />
          </div>
          <button className="btn btn-outline-success mt-2" onClick={() => navigate("/recipes")}>
            Add Meal
          </button>
          <MealHistoryList triggerUpdate={triggerUpdate} />
        </div>
      ) : (
        <p>Please log in</p>
      )}
    </div>
  );
}

export default Records;
