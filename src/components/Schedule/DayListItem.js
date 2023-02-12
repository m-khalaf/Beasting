import React from "react";
import "./DayListItem.scss";

export default function DayListItem(props) {
  return (
    <div>
      <li
        onClick={() => props.setDay(props.name)}
        selected={props.selected}
        className="day-list__item"
      >
        <ul>{props.day}</ul>
      </li>
    </div>
  );
}
