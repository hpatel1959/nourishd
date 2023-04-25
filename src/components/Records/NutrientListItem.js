import React from "react";

function NutrientListItem(props) {
  const { data } = props;
  const lable = Object.keys(data)[0];
  const valArr = Object.values(data);

  let currentVal = Math.floor((valArr[0].current * 100) / 100);
  let suggestedVal = valArr[0].suggested;

  let unit = "g";

  if (lable === "calories") {
    unit = "";
  } else if (
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
    if (word.includes("_")) {
      word = word.split("_").join(" ");
    }
    let words = word.split(" ");
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
    }
    return words.join(" ");
  }

  const remaining = Math.floor(suggestedVal - currentVal);
  const percent = (currentVal / suggestedVal) * 100;
  const capitalizedLabel = capitalizeFirstLetter(lable);

  return (
    <div className="nutrient-list-item">
      <div className="nutrient-list-item-text">
        <div className="nutrient-list-item-text-label">{capitalizedLabel}</div>
        <div className="nutrient-list-item-text-param">
          {remaining > 0 ? (
            <span>{currentVal}</span>
          ) : (
            <span className="param-color">{currentVal}</span>
          )}
          <span>
            {" "}
            / {suggestedVal} {unit}
          </span>
        </div>
      </div>
      <div
        className="progress"
        role="progressbar"
        aria-label="Basic example"
        aria-valuenow={percent}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div className="progress-bar bg-warning" style={{ width: `${percent}%` }}></div>
      </div>
    </div>
  );
}

export default NutrientListItem;
