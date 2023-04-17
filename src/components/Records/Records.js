import React, { useState, useEffect } from "react";
import axios from "axios";

function Records() {
  const [userData, setUserData] = useState({})

  const fetchUserData = async () => {
    const url = "http://localhost:4000/userInfo";

    try {
      const response = await axios.get(url, { withCredentials: true })
      console.log(response.data.user)
    } catch (error) {
      console.error("Error: " + error.message);
    }
    
  }

  useEffect(() => {
    fetchUserData(); // Invoke the async function within useEffect
  }, []);

  return (
    <div>
      <h1>Records</h1>
    </div>
  );
}

export default Records;
