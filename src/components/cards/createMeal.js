import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import axios from "axios";
import { sortMeals } from "../../helpers/sort";

export default function CreateMeal({
  onCreateMeal,
  modalMealIsOpen,
  setModalMealIsOpen,
  schedule_obj,
  refresh,
  setRefresh
}) {
  const [mealName, setMealName] = useState("");
  const [sortedMeals, setSortedMeals] = useState(schedule_obj.meals);

  const handleChange = (event) => {
    setMealName(event.target.value);
  };

  const saveMeal = () => {
    if(mealName.length !== 0) {
      axios
        .post(`http://localhost:8000/home/save-meal/`, {
          name: mealName
        })
        .then((res) => {
          console.log("Completion status updated successfully", res.data);
          setRefresh(refresh + 1)
          onRequestClose()
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }

  useEffect(() => {
    setSortedMeals(sortMeals(schedule_obj.meals, mealName));
  }, [mealName]);

  
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
          <button class="btn btn-outline-primary mx-2" onClick={saveMeal}>Save</button>
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
                  meals.meal_name
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
