import React from "react";
import { getSuggestedNutrientIntake } from "../../helpers/helpers";
import NutrientListItem from "./NutrientListItem";

function NutrientList(props) {
  const { userData } = props;

  // ----------------------------------------------------
  const dayData = {
    calories: 300,
    fat: 20,
    carbohydrate: 100,
    sodium: 1.1,
    sugar: 2.3,
    protein: 24,
    fiber: 12,
    potassium: 1.4,
    vitamin_a: 0.0001,
    vitamin_c: 0.00003,
    calcium: 0.4,
    iron: 0.004,
    cholesterol: 0.1,
  };
  // ----------------------------------------------------

  const SuggestedData = getSuggestedNutrientIntake(userData);
  // const arrOfIntakes = Object.entries(intakes);
  // console.log(SuggestedData);
  const arrOfIntakes = Object.entries(dayData).map(([key, value]) => {
    const obj = { [key]: { current: value } };
    if (SuggestedData.hasOwnProperty(key)) {
      obj[key]["suggested"] = SuggestedData[key];
    }
    return obj;
  });
  // console.log(arrOfIntakes);

  const arrOfNutrientListItems = arrOfIntakes.map((data) => {
    return <NutrientListItem data={data} />;
  });

  return <div>{arrOfNutrientListItems}</div>;
}

export default NutrientList;
