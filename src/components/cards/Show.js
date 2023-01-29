import React from "react";

export default function Show(props) {
  return (
    <li>
      <h2>{props.name}</h2>
      <h3>{props.description}</h3>
    </li>
  );
}
