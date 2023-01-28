import React from "react";
import MealItem from "./MealItem";

export default function ListItem(props) {
  const mealItems = props.schedule_obj.meal_object.monday.map((meal) => {
    return <MealItem id={meal.id} name={meal.name} />;
  });

  return (
    <div>
      <li>
        <header className="App-header">Monday</header>
        <ul>{mealItems}</ul>;
      </li>
    </div>
  );
}
