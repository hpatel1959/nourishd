import React from "react";

function NutrientListItem(props) {
  const { data } = props;
  const lable = Object.keys(data)[0];
  const valArr = Object.values(data);

  const currentVal = valArr[0].current;
  let suggestedVal = valArr[0].suggested;

  let unit = "g";

  if (
    lable === "vitamin_c" ||
    lable === "potassium" ||
    lable === "calcium" ||
    lable === "iron" ||
    lable === "sodium" ||
    lable === "cholesterol"
  ) {
    unit = "mg";
    suggestedVal *= 1000;
  } else if (lable === "vitamin_a") {
    unit = "mcg";
    suggestedVal *= 1000000;
  }

  const remaining = Math.floor(suggestedVal - currentVal);

  return (
    <div>
      <p>
        {lable}({unit}) : {currentVal} / {suggestedVal} | Remaining {remaining}
      </p>
    </div>
  );
}

export default NutrientListItem;

// {
//     <div>
//       if (suggestedVal.isInteger) {
//        <p>
//         {lable} (g) : {currentVal} / {suggestedVal} | Remaining {remaining}
//       </p>
//       } elseif (suggestedVal < 0 && (suggested * 1000).isInteger) {
//         <p>
//         {lable} (mg) : {currentVal} / {suggestedVal} | Remaining {remaining}
//         </p>
//       } else (suggestedVal < 0 && (suggestedVal * 1000000).isInteger) {
//         <p>
//         {lable} (mcg) : {currentVal} / {suggestedVal} | Remaining {remaining}
//         </p>
//       }

//     </div>
// }
