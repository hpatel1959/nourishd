import React from "react";
import { getSuggestedNutrientIntake } from "../../helpers/nutrientListHelpers";
import NutrientListItem from "./NutrientListItem";

function NutrientList(props) {
  const { userData, stateGetters } = props;

  const {
    calories,
    fat,
    carbohydrates,
    sodium,
    sugar,
    protein,
    fiber,
    potassium,
    vitaminA,
    vitaminC,
    calcium,
    iron,
    cholesterol,
  } = stateGetters;

  const dayData = {
    calories,
    fat,
    carbohydrates,
    sodium,
    sugar,
    protein,
    fiber,
    potassium,
    vitamin_a: vitaminA,
    vitamin_c: vitaminC,
    calcium,
    iron,
    cholesterol,
  };

  const SuggestedData = getSuggestedNutrientIntake(userData);
  const arrOfIntakes = Object.entries(dayData).map(([key, value]) => {
    const obj = { [key]: { current: value } };
    if (SuggestedData.hasOwnProperty(key)) {
      obj[key]["suggested"] = SuggestedData[key];
    }
    return obj;
  });

  const arrOfNutrientListItems = arrOfIntakes.map((data) => {
    return <NutrientListItem data={data} />;
  });

  return <div className="nutrient-list-container">{arrOfNutrientListItems}</div>;
}

export default NutrientList;
