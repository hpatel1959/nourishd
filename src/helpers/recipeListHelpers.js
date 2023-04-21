import axios from "axios";

export async function addToFavourites(name, uri) {
  const queryName = name.split(" ").join("-");
  const normalizedQueryName = queryName.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const axiosUrl = `http://localhost:4000/recipes/${normalizedQueryName}`;

  const extractIdFromUri = function (uri) {
    return uri.split("#recipe_").pop();
  };

  const id = extractIdFromUri(uri);
  const requestData = {
    recipe_id: id,
  };

  const response = await axios.get(axiosUrl, {
    params: requestData,
    withCredentials: true,
  });

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

  try {
    const responseTwo = await axios.post(urlTwo, requestDataTwo, {
      withCredentials: true,
    });

    if (responseTwo.data.success) {
      console.log("Success");
    } else {
      console.log("Failed to remove");
    }
  } catch (error) {
    console.error("Error during login: " + error.message);
  }
}
