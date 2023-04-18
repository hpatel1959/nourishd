import React from "react";

function NutrientListItem(props) {
  const { data } = props;

  const lable = Object.keys(data);
  const valObj = Object.values(data);
  const currentVal = valObj[0].current;
  const suggestedVal = valObj[0].suggested;
  const goal = Math.floor(suggestedVal - currentVal);
  console.log(valObj);
  return (
    <div>
      <p>
        {lable} : {currentVal} / {suggestedVal} | Remaining {goal}
      </p>
    </div>
  );
}

export default NutrientListItem;
