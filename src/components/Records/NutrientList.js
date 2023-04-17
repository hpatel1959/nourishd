import React from "react";
import { getSuggestedNutrientIntake } from "../../helpers/helpers";
import NutrientListItem from "./NutrientListItem";

function NutrientList(props) {
  const { userData } = props;

  const intakes = getSuggestedNutrientIntake(userData);
  const arrOfIntakes = Object.entries(intakes);

  const arrOfNutrientListItems = arrOfIntakes.map((item) => {
    return <NutrientListItem item={item} />;
  });

  return <div>{arrOfNutrientListItems}</div>;
}

export default NutrientList;
