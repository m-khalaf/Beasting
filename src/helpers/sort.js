const sortExercises = (exerciseArray, stringToMatch) => {
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

const filterExercises = (arr, name) => {
  return arr.filter(function (item) {
    return item.name === name;
  });
};

export { sortExercises, filterExercises };
