const sortExercises = (exerciseArray, stringToMatch) => {
  console.log(exerciseArray)
  return exerciseArray.sort((a, b) => {
    const aMatch = a.exercise_name
      .toLowerCase()
      .includes(stringToMatch.toLowerCase());
    const bMatch = b.exercise_name
      .toLowerCase()
      .includes(stringToMatch.toLowerCase());

    if (aMatch && !bMatch) return -1;
    if (!aMatch && bMatch) return 1;
    if (!aMatch && !bMatch) return 0;

    const aIndex = a.exercise_name
      .toLowerCase()
      .indexOf(stringToMatch.toLowerCase());
    const bIndex = b.exercise_name
      .toLowerCase()
      .indexOf(stringToMatch.toLowerCase());

    return aIndex - bIndex;
  });
};

const sortMeals = (mealsArray, stringToMatch) => {
  console.log(mealsArray)
  return mealsArray.sort((a, b) => {
    const aMatch = a.meal_name
      .toLowerCase()
      .includes(stringToMatch.toLowerCase());
    const bMatch = b.meal_name
      .toLowerCase()
      .includes(stringToMatch.toLowerCase());

    if (aMatch && !bMatch) return -1;
    if (!aMatch && bMatch) return 1;
    if (!aMatch && !bMatch) return 0;

    const aIndex = a.meal_name
      .toLowerCase()
      .indexOf(stringToMatch.toLowerCase());
    const bIndex = b.meal_name
      .toLowerCase()
      .indexOf(stringToMatch.toLowerCase());

    return aIndex - bIndex;
  });
};

export { sortExercises, sortMeals };
