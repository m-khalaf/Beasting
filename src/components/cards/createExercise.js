import { useState } from "react";

export default function CreatExercise({ onCreateExercise }) {
  const [formData, setFormData] = useState({
    exerciseName: "",
    exerciseDetail: "",
  });

  const onHandleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const onHandleSubmit = (event) => {
    event.preventDefault();
    onCreateExercise(formData);
  };

  return (
    <div>
      <form onSubmit={onHandleSubmit}>
        <label>Create Exercise</label>{" "}
        <input
          name="exerciseName"
          value={formData.exerciseName}
          onChange={onHandleChange}
        />{" "}
        <label>Add Exercise Detail</label>
        <input
          name="exerciseDetail"
          value={formData.exerciseDetail}
          onChange={onHandleChange}
        />
        <button type="submit">Create </button>
      </form>
    </div>
  );
}
