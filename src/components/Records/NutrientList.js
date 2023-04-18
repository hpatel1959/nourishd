import React from "react";
import { getSuggestedNutrientIntake } from "../../helpers/helpers";
import NutrientListItem from "./NutrientListItem";

function NutrientList(props) {
  const { userData } = props;

  const intakes = getSuggestedNutrientIntake(userData);
  const arrOfIntakes = Object.entries(intakes);

  const arrOfNutrientListItems = arrOfIntakes.map(([label, num]) => {
    return <NutrientListItem lable={label} num={num} />;
  });

  return <div>{arrOfNutrientListItems}</div>;
}

export default NutrientList;
