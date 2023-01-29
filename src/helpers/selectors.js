let schedule_obj = {
  score: 0,

  days: [
    {
      id: 1,
      name: "Monday",
      meals: [1, 2],
      exercises: [1, 2],
    },
    {
      id: 2,
      name: "Tuesday",
      meals: [3, 4],
      exercises: [3, 4],
    },
    {
      id: 3,
      name: "Wednesday",
      meals: [5, 6],
      exercises: [5, 6],
    },
    {
      id: 4,
      name: "Thursday",
      meals: [7, 8],
      exercises: [7, 8],
    },
    {
      id: 5,
      name: "Friday",
      meals: [9, 10],
      exercises: [9, 10],
    },
  ],
  exercises: {
    1: {
      id: 1,
      name: "running",
      description: "10 minutes, 1 minute rest, 2 sets",
    },
    2: {
      id: 2,
      name: "bench",
      description: "2sets of 10 reps, 70%max",
    },
  },
  meals: {
    5: {
      id: 5,
      name: "chicken",
    },
    6: {
      id: 6,
      name: "milk",
    },
  },
};

const getDataForDay = function (state, day) {
  const days = state.days;
  const filteredDay = days.filter((dayObject) => dayObject.name === day)[0];
  const mealForDay = filteredDay.meals;
  console.log("meal for day", mealForDay);
  const mealsArray = Object.values(state.meals);

  const result = mealsArray.filter((meal) => mealForDay.includes(meal.id));
  return result;
};

console.log(getDataForDay(schedule_obj, "Wednesday"));
