import React from "react";

export default function DayListItemMeal(props) {
  return (
    <div>
      <li onClick={() => console.log("clicked")} selected={props.selected}>
        <ul>{props.day}</ul>
      </li>
    </div>
  );
}
