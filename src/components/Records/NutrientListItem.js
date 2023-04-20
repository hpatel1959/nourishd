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

  function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  const remaining = Math.floor(suggestedVal - currentVal);
  const percent = (currentVal / suggestedVal) * 100;
  const capitalizedLabel = capitalizeFirstLetter(lable);

  return (
    <div className="card mb-2 nutrient-amount">
      <div>
        <span>
          {capitalizedLabel}({unit}): {currentVal} / {suggestedVal} |
        </span>
        {remaining > 0 ? (
          <span> Left: {remaining}</span>
        ) : (
          <span className="text-danger"> Left: {remaining}</span>
        )}
        <div
          className="progress mx-4 mb-2"
          role="progressbar"
          aria-label="Basic example"
          aria-valuenow={percent}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div className="progress-bar bg-warning" style={{ width: `${percent}%` }}></div>
        </div>
      </div>
    </div>
  );
}

export default NutrientListItem;
