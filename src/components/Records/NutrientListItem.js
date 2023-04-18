import React from "react";

function NutrientListItem(props) {
  const { data } = props;

  const lable = Object.keys(data);
  const valObj = Object.values(data);
  const currentVal = valObj[0].current;
  const suggestedVal = valObj[0].suggested;
  const remaining = Math.floor(suggestedVal - currentVal);
  console.log(valObj);
  return (
    <div>
      <p>
        {lable} : {currentVal} / {suggestedVal} | Remaining {remaining}
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
