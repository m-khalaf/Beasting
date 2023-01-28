import React from "react";
import DayListItemMeal from "./DayListItemMeal";

export default function DayList(props) {
  const mealItems = props.schedule_obj.meal_object.monday.map((meal) => {
    return (
      <DayListItemMeal
        key={meal.id}
        name={meal.name}
        selected={meal.name === props.value}
        setDay={props.onChange}
      />
    );
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
