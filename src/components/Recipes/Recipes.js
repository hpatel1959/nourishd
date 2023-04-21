import { useState, useEffect } from "react";
import { getRecipes } from "../../helpers/recipeHelpers";
import RecipeList from "./RecipeList";

function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("burger");
  const [errorMessage, setErrorMessage] = useState("");
  const [showNoRecipes, setShowNoRecipes] = useState(false);

  useEffect(() => {
    getRecipes(query, setRecipes, setShowNoRecipes, setErrorMessage, showNoRecipes);
  }, [query, recipes.length, showNoRecipes]);

  const updateSearch = (e) => {
    const originalWord = e.target.value;
    const normalizedWord = originalWord.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    setSearch(normalizedWord);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch} />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div>
        {query !== undefined ? <RecipeList recipes={recipes} /> : <p>Search your meal Now!</p>}
      </div>
      {showNoRecipes && (
        <div className="no-recipe-message-container">
          <p className="alert alert-danger">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Recipes;
