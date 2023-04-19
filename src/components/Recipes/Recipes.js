import { useState, useEffect } from "react";
import axios from "axios";

import RecipeList from "./RecipeList";

function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState();

  useEffect(() => {
    const getRecipes = async () => {
      const response = await axios.get(
        `http://localhost:4000/recipes/${query}`
      );
      setRecipes(response.data.hits);
    };

    getRecipes();
  }, [query]);

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div>
        <RecipeList recipes={recipes} />
      </div>
    </div>
  );
}

export default Recipes;
