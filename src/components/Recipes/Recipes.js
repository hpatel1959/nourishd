import { useState, useEffect } from "react";
import axios from "axios";

import RecipeList from "./RecipeList";

function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("burger");

  useEffect(() => {
    const getRecipes = async () => {
      if (query !== undefined) {
        const response = await axios.get(`http://localhost:4000/recipes/${query}`);
        setRecipes(response.data.hits);
      }
    };

    getRecipes();
  }, [query]);

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
    </div>
  );
}

export default Recipes;
