import React from "react";

function NutrientListItem(props) {
  const { data } = props;
  const lable = Object.keys(data)[0];
  const valArr = Object.values(data);

  let currentVal = Math.floor((valArr[0].current * 100) / 100);
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
  const percent = (currentVal / suggestedVal) * 100;
  return (
    <div className="card mb-2 nutrient-amount">
      <p>
        <span>
          {lable}({unit}):
        </span>
        <span>
          {currentVal} / {suggestedVal} |
        </span>
        {remaining > 0 ? (
          <span> Remaining: {remaining}</span>
        ) : (
          <span className="text-danger"> Remaining: {remaining}</span>
        )}
        <div
          className="progress mx-4"
          role="progressbar"
          aria-label="Basic example"
          aria-valuenow={percent}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div className="progress-bar" style={{ width: `${percent}%` }}></div>
        </div>
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
