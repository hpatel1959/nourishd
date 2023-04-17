import React, { useState, useEffect } from "react";
import axios from "axios";
import UserInfo from "./UserInfo";
import NutrientList from "./NutrientList";

function Records() {
  const [userData, setUserData] = useState({});

  const fetchUserData = async () => {
    const url = "http://localhost:4000/userInfo";

    try {
      const response = await axios.get(url, { withCredentials: true });
      console.log(response.data.user);
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
      <h1>Records</h1>
      <h3>User Details</h3>
      <UserInfo userData={userData} />
      <h3>Daily Intakes</h3>
      <NutrientList userData={userData} />
    </div>
  );
}

export default Records;
