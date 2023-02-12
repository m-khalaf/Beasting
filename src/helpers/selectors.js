// import { get } from "request";


const getexcerciseForDay = function (state, day) {
  let date = new Date(day * 1000);
  let options = { month: "numeric", day: "numeric" };
  const exercises = state.exerTrack.filter((exc) => {
    let excDate = new Date(exc.exercise_date);
    return (
      excDate.toLocaleDateString("en-US", options) ===
      date.toLocaleDateString("en-US", options)
    );
  });
  return exercises;
};

const getMealForDay = function (state, day) {
  let date = new Date(day * 1000);
  let options = { month: "numeric", day: "numeric" };
  const meals = state.mealTrack.filter((meal) => {
    let mealDate = new Date(meal.meal_date);
    return (
      mealDate.toLocaleDateString("en-US", options) ===
      date.toLocaleDateString("en-US", options)
    );
  });
  return meals;
};

function mealCompletionPercentage(mealTrack) {
  let days = new Set();
  let mealCount = {};
  let options = { month: "numeric", day: "numeric" };

  // Get unique days and count of meals for each day
  mealTrack.forEach((meal) => {
    let date = new Date(meal.meal_date);

    let day = date.toLocaleDateString("en-US", options);
    days.add(day);
    if (!mealCount[day]) {
      mealCount[day] = 1;
    } else {
      mealCount[day]++;
    }
  });

  // Calculate the completion percentage for each day
  let completionPercentage = {};
  mealTrack.forEach((meal) => {
    let date = new Date(meal.meal_date);
    let day = date.toLocaleDateString("en-US", options);
    if (meal.completion) {
      if (!completionPercentage[day]) {
        completionPercentage[day] = 1;
      } else {
        completionPercentage[day]++;
      }
    }
  });

  Object.keys(completionPercentage).forEach((day) => {
    completionPercentage[day] =
      (completionPercentage[day] / mealCount[day]) * 100;
  });

  return completionPercentage;
}

function excerciseCompletionPercentage(excerciseTrack) {
  let days = new Set();
  let excerciseCount = {};
  let options = { month: "numeric", day: "numeric" };

  // Get unique days and count of exercises for each day
  excerciseTrack.forEach((excercise) => {
    let date = new Date(excercise.exercise_date);

    let day = date.toLocaleDateString("en-US", options);
    days.add(day);
    if (!excerciseCount[day]) {
      excerciseCount[day] = 1;
    } else {
      excerciseCount[day]++;
    }
  });

  // Calculate the completion percentage for each day
  let completionPercentage = {};
  excerciseTrack.forEach((excercise) => {
    let date = new Date(excercise.exercise_date);
    let day = date.toLocaleDateString("en-US", options);
    if (excercise.completion) {
      if (!completionPercentage[day]) {
        completionPercentage[day] = 1;
      } else {
        completionPercentage[day]++;
      }
    }
  });

  Object.keys(completionPercentage).forEach((day) => {
    completionPercentage[day] =
      (completionPercentage[day] / excerciseCount[day]) * 100;
  });

  return completionPercentage;
}

// const getUnixTime = (a, date) => {
//   let b = new Date(a * 1000);
//   let day = b.getDay();
//   if (day === "Monday") {
//     return date;
//   } else if (day === "Tuesday") {
//     return date + 1 * 24 * 60 * 60;
//   } else if (day === "Wednesday") {
//     return date + 2 * 24 * 60 * 60;
//   } else if (day === "Thursday") {
//     return date + 3 * 24 * 60 * 60;
//   } else if (day === "Friday") {
//     return date + 4 * 24 * 60 * 60;
//   } else if (day === "Saturday") {
//     return date + 5 * 24 * 60 * 60;
//   } else if (day === "Sunday") {
//     return date + 6 * 24 * 60 * 60;
//   }
// };
export {
  getexcerciseForDay,
  getMealForDay,
  mealCompletionPercentage,
  // getUnixTime,
  excerciseCompletionPercentage,
};

