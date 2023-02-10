// meal_tracker_id, meal_id, meal_date, meal_name, completion
// exercise_id, exercise_name, exercise_detail, exercise_date, completion

const unixToDate = function (unix) {
  let a = new Date(unix * 1000);
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  // var hour = a.getHours();
  // var min = a.getMinutes();

  return (
    "" + days[a.getDay()] + " " + month + " " + date + " " + year + " " + unix
  );
  // Wed Mar 16 2022 1647481862
};

module.exports = {
  schedule: (schedule_present, day) => {
    let schedule_obj = { ...schedule_present };
    // return schedule_obj;
    let exer_sched = schedule_obj.exerTrack.map((exercise) => {
      exercise.exercise_date = unixToDate(exercise.exercise_date);
      return exercise;
    });
    let meal_sched = schedule_obj.mealTrack.map((meal) => {
      meal.meal_date = unixToDate(meal.meal_date);
      return meal;
    });

    schedule_obj["exerTrack"] = exer_sched;
    schedule_obj["mealTrack"] = meal_sched;

    return schedule_obj;
  },
};

function calculateCompletionPercentage(mealTrack) {
  let days = new Set();
  let mealCount = {};

  // Get unique days and count of meals for each day
  mealTrack.forEach((meal) => {
    days.add(meal.meal_date);
    if (!mealCount[meal.meal_date]) {
      mealCount[meal.meal_date] = 1;
    } else {
      mealCount[meal.meal_date]++;
    }
  });

  // Calculate the completion percentage for each day
  let completionPercentage = {};
  mealTrack.forEach((meal) => {
    if (meal.completion) {
      if (!completionPercentage[meal.meal_date]) {
        completionPercentage[meal.meal_date] = 1;
      } else {
        completionPercentage[meal.meal_date]++;
      }
    }
  });

  Object.keys(completionPercentage).forEach((day) => {
    completionPercentage[day] =
      (completionPercentage[day] / mealCount[day]) * 100;
  });

  return completionPercentage;
}

let unix = 1647481862;

console.log(unixToDate(1611798800 - 2 * 24 * 60 * 60));
