import axios from "axios";

export const getRecipes = async (
  query,
  setRecipes,
  setShowNoRecipes,
  setErrorMessage,
  showNoRecipes
) => {
  if (!query) return;

  try {
    const response = await axios.get(`http://localhost:4000/recipes/${query}`);

    if (response.data.hits) {
      setRecipes(response.data.hits);

      if (response.data.hits.length === 0) {
        setShowNoRecipes(true);
        setErrorMessage(`No recipes found for ${query}`);
      } else if (showNoRecipes) {
        setShowNoRecipes(false);
      }
    }
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
};
