import { useState } from "react";
import Modal from "react-modal";

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
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            width: "400px",
            height: "400px",
          },
        }}
      >
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
      </Modal>
    </div>
  );
}
