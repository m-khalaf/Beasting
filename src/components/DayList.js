import React from "react";
import DayListItemMeal from "./DayListItemMeal";

export default function DayList(props) {
  const daysArray = Object.keys(props.schedule_obj.meal_object);
  console.log(daysArray);
  const day = daysArray.map((meal) => {
    return (
      <DayListItemMeal
        meal={meal}
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
        <header className="App-header"></header>
        <ul>{day}</ul>;
      </li>
    </div>
  );
}
