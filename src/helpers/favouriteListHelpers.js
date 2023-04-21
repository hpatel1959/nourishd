import axios from "axios";

export async function fetchFavouriteRecipes(setFavouriteRecipes) {
  const url = "http://localhost:4000/userFavourites";

  const response = await axios.get(url, {
    withCredentials: true,
  });

  if (response.data.success) {
    // console.log(response.data);
  } else {
    // console.log("Failed to fetch data!");
  }

  setFavouriteRecipes(response.data.recipe);
}
