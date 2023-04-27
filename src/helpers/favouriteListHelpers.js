import axios from "axios";

export async function fetchFavouriteRecipes(setFavouriteRecipes) {
  try {
    const response = await axios.get("http://localhost:4000/userFavourites", {
      withCredentials: true,
    });
    setFavouriteRecipes(response.data.recipe);
  } catch (error) {
    console.log(error);
  }
}
