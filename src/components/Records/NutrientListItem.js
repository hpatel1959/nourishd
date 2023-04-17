import React from "react";

function NutrientListItem(props) {
  const { item } = props;
  return (
    <div>
      <p>{item}</p>
    </div>
  );
}

export default NutrientListItem;
