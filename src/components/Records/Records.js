import React, { useState, useEffect } from "react";
import axios from "axios";

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
      {userData ? (
        <>
          <p>{userData.username}</p>
          <p>{userData.age} years old</p>
          <p>{userData.height} cm</p>
          <p>{userData.weight} kg</p>
        </>
      ) : (
        <p>Please log in</p>
      )}
    </div>
  );
}

export default Records;
