import React from "react";

export default function ListItem(props) {
  const listItems = props.schedule_obj.meal_object.monday.map((meal) => (
    <li>{meal}</li>
  ));

  return (
    <div>
      <li>
        <header className="App-header">Monday</header>
        <ul>{listItems}</ul>;
      </li>
    </div>
  );
}
