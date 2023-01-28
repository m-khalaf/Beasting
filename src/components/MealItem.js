import React from "react";

export default function ListItem(props) {
  return (
    <div>
      <li>
        <ul>{props.name}</ul>
        <ul>{props.id}</ul>
      </li>
    </div>
  );
}
