// For men: BMR = 88.362 + (13.397 x weight in kg) + (4.799 x height in cm) - (5.677 x age in years)
// For women: BMR = 447.593 + (9.247 x weight in kg) + (3.098 x height in cm) - (4.330 x age in years)

function calculateSuggestedCalories(userParams) {
  const { weight, height, sex, age } = userParams;
  let result = 0;
  if (sex === "male") {
    result = 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
  } else if (sex === "female") {
    result = 447.593 + 9.247 * weight + 3.098 * height - 4.33 * age;
  } else {
  }
  return result;
}

export function getSuggestedNutrientIntake(userParams) {
  const { sex } = userParams;
  const result = {};
  const calories = calculateSuggestedCalories(userParams);
  result["fat"] = Math.floor((calories * 0.2) / 9);
  result["carbs"] = Math.floor((calories * 0.4) / 4);
  result["protein"] = Math.floor((calories * 0.3) / 4);
  result["sugar"] = Math.floor((calories * 0.1) / 4);
  result["sodium"] = 2.3;
  result["calcium"] = 1;
  result["cholesterol"] = 0.3;

  if (sex === "male") {
    result["fiber"] = 38;
    result["potassium"] = 3.4;
    result["vitaminA"] = 0.0009;
    result["vitaminC"] = 0.00009;
    result["iron"] = 0.008;
  } else if (sex === "female") {
    result["fiber"] = 25;
    result["potassium"] = 2.6;
    result["vitaminA"] = 0.0007;
    result["vitaminC"] = 0.000075;
    result["iron"] = 0.018;
  }

  return result;
}

const test = calculateSuggestedCalories({
  weight: 69,
  height: 175,
  sex: "male",
  age: 30,
});
console.log(test);
