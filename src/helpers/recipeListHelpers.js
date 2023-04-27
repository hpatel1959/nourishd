import axios from "axios";

const extractIdFromUri = (uri) => uri.split("#recipe_").pop();

export const addToFavourites = async (name, uri) => {
  const queryName = name.split(" ").join("-");
  const normalizedQueryName = queryName.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const axiosUrl = `http://localhost:4000/recipes/${normalizedQueryName}`;
  const id = extractIdFromUri(uri);
  const requestData = { recipe_id: id };
  try {
    const response = await axios.get(axiosUrl, { params: requestData, withCredentials: true });
    const { label, image, url, dietLabels, healthLabels, ingredientLines } = response.data;
    const requestDataTwo = {
      favourite: {
        recipe_id: id,
        name: label,
        image,
        url,
        diet_labels: dietLabels,
        health_labels: healthLabels,
        ingredient_lines: ingredientLines,
      },
    };
    const urlTwo = "http://localhost:4000/favourites";
    await axios.post(urlTwo, requestDataTwo, { withCredentials: true });
  } catch (error) {
    console.error("Error: " + error.message);
  }
};
