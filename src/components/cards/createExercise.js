import { useState, useEffect } from "react";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { sortExercises, filterExercises } from "../../helpers/sort";

export default function CreateExercise({
  onCreateExercise,
  modalIsOpen,
  setModalIsOpen,
  schedule_obj,
}) {
  const [formData, setFormData] = useState({
    exerciseName: "",
    exerciseDetail: "",
  });
  const [sortedExercises, setSortedExercises] = useState(
    schedule_obj.exercises
  );

  useEffect(() => {
    setSortedExercises(
      sortExercises(schedule_obj.exercises, formData.exerciseName)
    );
  }, [formData, schedule_obj.exercises]);

  const onHandleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const onHandleSubmit = (event) => {
    event.preventDefault();
    onCreateExercise(formData);
    setFormData({ name: "", description: "" });
    setModalIsOpen(false);
  };

  const onRequestClose = () => setModalIsOpen(false);
  return (
    <div>
      <Modal isOpen={modalIsOpen}>
        <form onSubmit={onHandleSubmit}>
          <div class="row mb-3">
            <label class="col-sm-2 col-form-label">Create Exercise</label>
            <div class="col-sm-10">
              <input
                class="form-control"
                name="exerciseName"
                value={formData.exerciseName}
                onChange={onHandleChange}
              />
            </div>
          </div>

          <div class="row mb-3">
            <label class="col-sm-2 col-form-label">Add Exercise Detail</label>
            <div class="col-sm-10">
              <input
                class="form-control"
                name="exerciseDetail"
                value={formData.exerciseDetail}
                onChange={onHandleChange}
              />
              <div class="p-2"></div>
            </div>
          </div>
          <button class="btn btn-outline-primary mx-2" type="submit">
            Save
          </button>
          <button class="btn btn-outline-primary mx-2" onclick={onRequestClose}>
            Close
          </button>
        </form>
        <div
          style={{
            width: "90%",
            height: "30px",
            display: "flex",
            flexWrap: "wrap",
          }}
        ></div>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {sortedExercises.map((exercise, index) => (
            <button
              class="btn btn-light"
              onMouseEnter={(e) => (e.target.style.backgroundColor = "orange")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#F6F6F6")}
              key={index}
              onClick={() => {
                setFormData({
                  exerciseName: exercise.exercise_name,
                  exerciseDetail: exercise.exercise_detail,
                });
              }}
            >
              {exercise.exercise_name}: {exercise.exercise_detail}
            </button>
          ))}
        </div>
      </Modal>
    </div>
  );
}
