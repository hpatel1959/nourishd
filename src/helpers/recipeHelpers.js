import axios from "axios";

export async function getRecipes(
  query,
  setRecipes,
  setShowNoRecipes,
  setErrorMessage,
  showNoRecipes
) {
  if (query !== undefined) {
    await axios.get(`http://localhost:4000/recipes/${query}`).then((response) => {
      if (response.data.hits) {
        setRecipes(response.data.hits);
        if (response.data.hits.length === 0) {
          setShowNoRecipes(true);
          setErrorMessage(`No recipes found for ${query}`);
        } else if (showNoRecipes) {
          setShowNoRecipes(false);
        }
      }
    });
  }
}
