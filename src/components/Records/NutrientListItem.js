import React from "react";

function NutrientListItem(props) {
  const { lable, num } = props;
  return (
    <div>
      <p>
        {lable} : {num}
      </p>
    </div>
  );
}

export default NutrientListItem;
