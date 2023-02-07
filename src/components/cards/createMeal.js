import { useState } from "react";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CreateMeal({
  onCreateMeal,
  modalIsOpen,
  setModalIsOpen,
}) {
  const [mealName, setMealName] = useState("");
  const handleChange = (event) => {
    setMealName(event.target.value);
  };

  const handleSumbit = (event) => {
    event.preventDefault();
    onCreateMeal(mealName);
  };

  return (
    <div>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <form onSubmit={handleSumbit}>
          <label class="form-label">Create Meal</label>
          <input
            class="form-control"
            value={mealName}
            onChange={handleChange}
          />
          <div class="p-2"></div>
          <button class="btn btn-outline-primary">Create </button>
        </form>
      </Modal>
    </div>
  );
}
