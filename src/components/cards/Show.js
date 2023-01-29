import React from "react";
import "../cards/styles.scss";

export default function Show(props) {
  return (
    <li className="list-group-item list-group-item-action">
      <h5 className="mb-1">{props.name}</h5>
      <p className="mb-1">{props.description}</p>
      <small>
        completed: {props.completion ? "completed" : "not completed"}
      </small>
    </li>
  );
}

{
  /* <div class="list-group">
  <a href="#" >
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">List group item heading</h5>
      <small>3 days ago</small>
    </div>
    <p class="mb-1">Some placeholder content in a paragraph.</p>
    <small>And some small print.</small>
  </a> */
}
