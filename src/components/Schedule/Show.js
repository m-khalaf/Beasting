import React from "react";
import { useState } from "react";
import EditExercise from "./editExercise";
import "../cards/styles.scss";

export default function Show(props) {
  const [showEdit, setShowEdit] = useState(false);
  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  let content = <h3>hello</h3>;
  if (showEdit) {
    content = <EditExercise></EditExercise>;
  }

  return (
    <li className="appointment__card--show">
      <h5 className="mb-1">{props.name}</h5>
      <p className="mb-1">{props.description}</p>
      <div>{content}</div>
      <small>
        completed: {props.completion ? "completed" : "not completed"}
      </small>
      <button className="edit" onClick={handleEditClick}>
        Edit
      </button>
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
