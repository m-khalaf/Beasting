import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { sortMeals } from "../../helpers/sort";

export default function CreateMeal({
  onCreateMeal,
  modalMealIsOpen,
  setModalMealIsOpen,
  schedule_obj,
}) {
  const [mealName, setMealName] = useState("");
  const [sortedMeals, setSortedMeals] = useState(schedule_obj.meals);

  const handleChange = (event) => {
    setMealName(event.target.value);
  };

  useEffect(() => {
    setSortedMeals(sortMeals(schedule_obj.meals, mealName));
  }, [mealName, schedule_obj.meals]);

  console.log(sortMeals(schedule_obj.meals, mealName));
  const handleSubmit = (event) => {
    event.preventDefault();
    onCreateMeal(mealName);
    setModalMealIsOpen(false);
  };

  const onRequestClose = () => setModalMealIsOpen(false);
  return (
    <div>
      <Modal isOpen={modalMealIsOpen}>
        <form onSubmit={handleSubmit}>
          <label class="form-label">Create Meal</label>
          <input
            class="form-control"
            value={mealName}
            onChange={handleChange}
          />
          <div class="p-2"></div>
          <button class="btn btn-outline-primary mx-2">Save</button>
          <button class="btn btn-outline-primary mx-2" onClick={onRequestClose}>
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
          {sortedMeals.map((meals, index) => (
            <button
              class="btn btn-light"
              onMouseEnter={(e) => (e.target.style.backgroundColor = "orange")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#F6F6F6")}
              key={index}
              onClick={() => {
                setMealName(
                  meals.meal_name,
                );
              }}
            >
              {meals.meal_name}:{meals.meal_name}
            </button>
          ))}
        </div>
      </Modal>
    </div>
  );
}
