import axios from "axios";

export async function fetchUserData(setUserData) {
  const url = "http://localhost:4000/userInfo";
  try {
    const response = await axios.get(url, { withCredentials: true });
    setUserData(response.data.user);
  } catch (error) {
    console.error("Error: " + error.message);
  }
}
