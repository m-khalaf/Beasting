import { useState } from "react";
import Modal from "react-modal";

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
        <form onSubmit={handleSumbit}>
          <label>Create Meal</label>
          <input value={mealName} onChange={handleChange} />
          <button>Create </button>
        </form>
      </Modal>
    </div>
  );
}
