import { useState } from "react";

export default function CreateMeal({ onCreateMeal }) {
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
      <form onSubmit={handleSumbit}>
        <label>Create Meal</label>
        <input value={mealName} onChange={handleChange} />
        <button>Create </button>
      </form>
    </div>
  );
}
