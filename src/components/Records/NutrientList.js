import React, { useState, useEffect } from "react";
import { getSuggestedNutrientIntake } from "../../helpers/helpers";
import NutrientListItem from "./NutrientListItem";
import axios from "axios";

function NutrientList(props) {
  const { userData } = props;

  const [calories, setCalories] = useState("");
  const [fat, setFat] = useState("");
  const [carbohydrates, setCarbohydrates] = useState("");
  const [sodium, setSodium] = useState("");
  const [sugar, setSugar] = useState("");
  const [protein, setProtein] = useState("");
  const [fiber, setFiber] = useState("");
  const [potassium, setPotassium] = useState("");
  const [vitaminA, setVitaminA] = useState("");
  const [vitaminC, setVitaminC] = useState("");
  const [calcium, setCalcium] = useState("");
  const [iron, setIron] = useState("");
  const [cholesterol, setCholesterol] = useState("");

  // ----------------------------------------------------
  const dayData = {
    calories,
    fat,
    carbohydrates,
    sodium,
    sugar,
    protein,
    fiber,
    potassium,
    vitaminA,
    vitaminC,
    calcium,
    iron,
    cholesterol,
  };
  // ----------------------------------------------------

  const fetchDayData = async () => {
    const url = "http://localhost:4000/dayInfo";

    try {
      const response = await axios.get(url, { withCredentials: true });
      // console.log(response.data.day);
      setCalories(response.data.day.calories);
      setFat(response.data.day.fat);
      setCarbohydrates(response.data.day.carbohydrate);
      setSodium(response.data.day.sodium);
      setSugar(response.data.day.sugar);
      setProtein(response.data.day.protein);
      setFiber(response.data.day.fiber);
      setPotassium(response.data.day.potassium);
      setVitaminA(response.data.day.vitamin_a);
      setVitaminC(response.data.day.vitamin_c);
      setCalcium(response.data.day.calcium);
      setIron(response.data.day.iron);
      setCholesterol(response.data.day.cholesterol);
    } catch (error) {
      console.error("Error: " + error.message);
    }
  };

  useEffect(() => {
    fetchDayData();
  }, []);

  const SuggestedData = getSuggestedNutrientIntake(userData);
  const arrOfIntakes = Object.entries(dayData).map(([key, value]) => {
    const obj = { [key]: { current: value } };
    if (SuggestedData.hasOwnProperty(key)) {
      obj[key]["suggested"] = SuggestedData[key];
    }
    return obj;
  });

  const arrOfNutrientListItems = arrOfIntakes.map((data) => {
    return <NutrientListItem data={data} />;
  });

  return <div>{arrOfNutrientListItems}</div>;
}

export default NutrientList;
