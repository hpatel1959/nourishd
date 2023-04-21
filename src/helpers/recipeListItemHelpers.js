import axios from "axios";

export async function addToMeal(props, showValue) {
  const url = "http://localhost:4000/updateDayInfo";

  const extractIdFromUri = function (uri) {
    return uri.split("#recipe_").pop();
  };

  const extractedId = extractIdFromUri(props.uri);

  const requestData = {
    day: {
      calories: props.caloriesPerServing,
      fat: props.fatPerServing,
      carbohydrates: props.carbohydratesPerServing,
      sodium: props.sodiumPerServing,
      sugar: props.sugarPerServing,
      protein: props.proteinPerServing,
      fiber: props.fiberPerServing,
      potassium: props.potassiumPerServing,
      vitamin_a: props.vitaminAPerServing,
      vitamin_c: props.vitaminCPerServing,
      calcium: props.calciumPerServing,
      iron: props.ironPerServing,
      cholesterol: props.cholesterolPerServing,
      history: { [props.title]: extractedId },
    },
  };

  await axios
    .post(url, requestData, {
      withCredentials: true,
    })
    .then((res) => console.log("Success"))
    .catch((err) => console.log(err));

  showValue();
}
