const schedule = {
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
      completion: true,
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
}

function sortExercises(exerciseArray, stringToMatch) {
  return exerciseArray.sort((a, b) => {
    const aMatch = a.exercise_name.toLowerCase().includes(stringToMatch.toLowerCase());
    const bMatch = b.exercise_name.toLowerCase().includes(stringToMatch.toLowerCase());
    
    if (aMatch && !bMatch) return -1;
    if (!aMatch && bMatch) return 1;
    if (!aMatch && !bMatch) return 0;
    
    const aIndex = a.exercise_name.toLowerCase().indexOf(stringToMatch.toLowerCase());
    const bIndex = b.exercise_name.toLowerCase().indexOf(stringToMatch.toLowerCase());
    
    return aIndex - bIndex;
  });
}

console.log(sortExercises(schedule.exercises, 'Ches'))
  