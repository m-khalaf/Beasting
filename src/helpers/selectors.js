// import { get } from "request";

let schedule_obj = {
  meals: [
    {
      id: 1,
      meal_name: "Turkey Dinner",
    },
    {
      id: 2,
      meal_name: "Chicken Salad",
    },
    {
      id: 3,
      meal_name: "Apple",
    },
    {
      id: 4,
      meal_name: "Chicken Breast",
    },
    {
      id: 5,
      meal_name: "Egg Sandwich",
    },
    {
      id: 6,
      meal_name: "Pear",
    },
    {
      id: 7,
      meal_name: "Tuna Salad",
    },
    {
      id: 8,
      meal_name: "Tofu Noodles",
    },
    {
      id: 9,
      meal_name: "Grapes",
    },
    {
      id: 10,
      meal_name: "Squash Pasta",
    },
    {
      id: 11,
      meal_name: "Chicken Teriyaki",
    },
    {
      id: 12,
      meal_name: "Noodle Soup",
    },
    {
      id: 13,
      meal_name: "Overnight Oats",
    },
    {
      id: 14,
      meal_name: "Chia Seed Pudding",
    },
    {
      id: 15,
      meal_name: "Green Smoothie",
    },
    {
      id: 16,
      meal_name: "Chocolate Protein Shake",
    },
    {
      id: 17,
      meal_name: "Tuna Sandwich",
    },
    {
      id: 18,
      meal_name: "Turkey Sandwich",
    },
    {
      id: 19,
      meal_name: "Sushi",
    },
    {
      id: 20,
      meal_name: "Granola Yogurt",
    },
  ],
  exercises: [
    {
      id: 1,
      exercise_name: "RDLs",
      exercise_detail: "5 sets of 10 reps",
    },
    {
      id: 2,
      exercise_name: "Bicep Curl",
      exercise_detail: "3 sets of 15 reps",
    },
    {
      id: 3,
      exercise_name: "Sprints",
      exercise_detail: "Sprints to exhaustion for 30 second on 1 minute off",
    },
    {
      id: 4,
      exercise_name: "Back Extension",
      exercise_detail: "3 sets of 15 reps",
    },
    {
      id: 5,
      exercise_name: "Chest Press",
      exercise_detail: "5 sets of 10 reps",
    },
    {
      id: 6,
      exercise_name: "Calf Raises",
      exercise_detail: "5 sets of 15 reps",
    },
    {
      id: 7,
      exercise_name: "Bulgarian Squats",
      exercise_detail: "3 sets of 12 reps",
    },
    {
      id: 8,
      exercise_name: "Hip Abduction",
      exercise_detail: "5 sets of 20 reps",
    },
    {
      id: 9,
      exercise_name: "Hammer Curls",
      exercise_detail: "3 sets of 15 reps",
    },
    {
      id: 10,
      exercise_name: "Good Mornings",
      exercise_detail: "4 sets of 20",
    },
    {
      id: 11,
      exercise_name: "Planks",
      exercise_detail: "Hold till exhuastion for 5 sets",
    },
    {
      id: 12,
      exercise_name: "Shoulder Press",
      exercise_detail: "5 sets of 10 reps",
    },
    {
      id: 13,
      exercise_name: "Side Plank",
      exercise_detail: "Hold till exhuastion for 5 sets",
    },
    {
      id: 14,
      exercise_name: "Yoga",
      exercise_detail: "A full hot hatha class for 60 minutes",
    },
    {
      id: 15,
      exercise_name: "Pilates",
      exercise_detail: "Reformer mat class for 50 minutes",
    },
    {
      id: 16,
      exercise_name: "Barre Physique",
      exercise_detail: "Barre class for 60 minutes",
    },
    {
      id: 17,
      exercise_name: "Barbell Squats",
      exercise_detail: "5 sets of 10 reps",
    },
    {
      id: 18,
      exercise_name: "Sumo Squat",
      exercise_detail: "3 sets of 5 reps",
    },
    {
      id: 19,
      exercise_name: "Deadlift",
      exercise_detail: "4 sets of 5 reps",
    },
    {
      id: 20,
      exercise_name: "Hip Thrust",
      exercise_detail: "5 sets of 10 reps",
    },
  ],
  exerTrack: [
    {
      exercise_name: "RDLs",
      exercise_detail: "5 sets of 10 reps",
      tracking_id: 1,
      completion: false,
      exercise_date: "Monday",
    },
    {
      exercise_name: "RDLs",
      exercise_detail: "5 sets of 10 reps",
      tracking_id: 1,
      completion: false,
      exercise_date: "Monday",
    },
    {
      exercise_name: "Bicep Curl",
      exercise_detail: "3 sets of 15 reps",
      tracking_id: 2,
      completion: false,
      exercise_date: "Tuesday",
    },
    {
      exercise_name: "Bicep Curl",
      exercise_detail: "3 sets of 15 reps",
      tracking_id: 2,
      completion: false,
      exercise_date: "Tuesday",
    },
    {
      exercise_name: "Sprints",
      exercise_detail: "Sprints to exhaustion for 30 second on 1 minute off",
      tracking_id: 3,
      completion: false,
      exercise_date: "Wednesday",
    },
    {
      exercise_name: "Sprints",
      exercise_detail: "Sprints to exhaustion for 30 second on 1 minute off",
      tracking_id: 3,
      completion: false,
      exercise_date: "Wednesday",
    },
    {
      exercise_name: "Back Extension",
      exercise_detail: "3 sets of 15 reps",
      tracking_id: 4,
      completion: false,
      exercise_date: "Thursday",
    },
    {
      exercise_name: "Back Extension",
      exercise_detail: "3 sets of 15 reps",
      tracking_id: 4,
      completion: false,
      exercise_date: "Thursday",
    },
    {
      exercise_name: "Chest Press",
      exercise_detail: "5 sets of 10 reps",
      tracking_id: 5,
      completion: false,
      exercise_date: "Friday",
    },
    {
      exercise_name: "Chest Press",
      exercise_detail: "5 sets of 10 reps",
      tracking_id: 5,
      completion: false,
      exercise_date: "Friday",
    },
  ],
  mealTrack: [
    {
      meal_name: "Turkey Dinner",
      tracking_id: 1,
      meal_date: "Monday",
      completion: false,
    },
    {
      meal_name: "Chicken Salad",
      tracking_id: 2,
      meal_date: "Tuesday",
      completion: false,
    },
    {
      meal_name: "Apple",
      tracking_id: 3,
      meal_date: "Wednesday",
      completion: false,
    },
    {
      meal_name: "Chicken Breast",
      tracking_id: 4,
      meal_date: "Thursday",
      completion: false,
    },
    {
      meal_name: "Egg Sandwich",
      tracking_id: 5,
      meal_date: "Friday",
      completion: false,
    },
  ],
};

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

