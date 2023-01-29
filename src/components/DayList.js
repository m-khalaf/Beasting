import React from "react";
import DayListItem from "./DayListItem";

export default function DayList(props) {
  const daysArray = props.schedule_obj.days;
  console.log(daysArray);
  const day = daysArray.map((day) => {
    return (
      <DayListItem
        day={day.name}
        key={day.id}
        name={day.name}
        selected={day.name === props.value}
        setDay={props.onClick}
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
