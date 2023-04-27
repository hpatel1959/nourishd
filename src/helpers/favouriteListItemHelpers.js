import axios from "axios";

async function addToMeal(props, showValue) {
  const queryName = props.title.split(" ").join("-");
  const nutrientInfo = await axios.get(`http://localhost:4000/recipes/${queryName}`, {
    params: {
      recipe_id: props.recipe_id,
    },
    withCredentials: true,
  });
  const { data } = nutrientInfo;
  const {
    label,
    calories,
    yield: serving,
    totalNutrients: {
      FAT: { quantity: fat },
      CHOCDF: { quantity: carbohydrates },
      NA: { quantity: sodium },
      SUGAR: { quantity: sugar },
      PROCNT: { quantity: protein },
      FIBTG: { quantity: fiber },
      K: { quantity: potassium },
      VITA_RAE: { quantity: vitaminA },
      VITC: { quantity: vitaminC },
      CA: { quantity: calcium },
      FE: { quantity: iron },
      CHOLE: { quantity: cholesterol },
    },
  } = data;

  const caloriesPerServing = calories / serving;
  const fatPerServing = fat / serving;
  const carbohydratesPerServing = carbohydrates / serving;
  const sodiumPerServing = sodium / serving / 1000;
  const sugarPerServing = sugar / serving;
  const proteinPerServing = protein / serving;
  const fiberPerServing = fiber / serving;
  const potassiumPerServing = potassium / serving / 1000;
  const vitaminAPerServing = vitaminA / serving / 1000000;
  const vitaminCPerServing = vitaminC / serving / 1000;
  const calciumPerServing = calcium / serving / 1000;
  const ironPerServing = iron / serving / 1000;
  const cholesterolPerServing = cholesterol / serving / 1000;

  const requestData = {
    day: {
      calories: caloriesPerServing,
      fat: fatPerServing,
      carbohydrates: carbohydratesPerServing,
      sodium: sodiumPerServing,
      sugar: sugarPerServing,
      protein: proteinPerServing,
      fiber: fiberPerServing,
      potassium: potassiumPerServing,
      vitamin_a: vitaminAPerServing,
      vitamin_c: vitaminCPerServing,
      calcium: calciumPerServing,
      iron: ironPerServing,
      cholesterol: cholesterolPerServing,
      history: { [label]: props.recipe_id },
    },
  };

  await axios.post("http://localhost:4000/updateDayInfo", requestData, { withCredentials: true });
  showValue();
}

async function removeFromFavourites(id, props) {
  const url = `http://localhost:4000/favourites/${id}`;

  try {
    const res = await axios.delete(url, { withCredentials: true });
    console.log(res.data);
    await fetchFavouriteRecipes(props);
  } catch (error) {
    console.log(error);
  }
}

async function fetchFavouriteRecipes(props) {
  try {
    const res = await axios.get("http://localhost:4000/userFavourites", { withCredentials: true });
    props.setFavouriteRecipes(res.data.recipe);
  } catch (error) {
    console.log(error);
  }
}

export { addToMeal, removeFromFavourites, fetchFavouriteRecipes };
