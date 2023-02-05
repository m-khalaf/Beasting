import { useState } from "react";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./create.scss";
export default function CreateExercise({
  onCreateExercise,
  modalIsOpen,
  setModalIsOpen,
}) {
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
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
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

          <div class="row mb-3"></div>
          <label class="col-sm-2 col-form-label">Add Exercise Detail</label>
          <div class="col-sm-10">
            <input
              class="form-control"
              name="exerciseDetail"
              value={formData.exerciseDetail}
              onChange={onHandleChange}
            />
            <div class="p-2"></div>
            <button class="btn btn-outline-primary" type="submit">
              Create{" "}
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
