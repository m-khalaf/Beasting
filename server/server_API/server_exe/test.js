const mealPlan = {
  1: [
    "Breakfast Scrambled eggs, bacon, avocado.",
    "Lunch Grilled chicken, mixed greens, olive oil.",
    "Dinner Beef stir-fry, veggies, coconut oil."
  ],
  2: [
    "Breakfast Chia seed pudding, almond milk, berries.",
    "Lunch Tuna salad, avocado, mixed greens.",
    "Dinner Pork chops, roasted veggies, butter."
  ],
  3: [
    "Breakfast Almond milk smoothie, spinach, nut butter.",
    "Lunch Chicken Caesar salad, low-carb dressing.",
    "Dinner Baked salmon, cauliflower rice, veggies."
  ],
  4: [
    "Breakfast Vegetable omelette, cheese, mushrooms.",
    "Lunch Grilled cheese, almond flour bread.",
    "Dinner Beef burgers, cheese, mixed greens."
  ],
  5: [
    "Breakfast Yogurt, mixed berries, almond butter.",
    "Lunch Grilled chicken, roasted veggies, mixed greens.",
    "Dinner Shrimp stir-fry, veggies, coconut oil."
  ],
  6: [
    "Breakfast Almond milk smoothie, spinach, nut butter.",
    "Lunch Grilled chicken, mixed greens, olive oil.",
    "Dinner Stuffed bell peppers, ground beef, cheese."
  ],
  7: [
    "Breakfast Eggs Benedict, low-carb muffin, hollandaise.",
    "Lunch Grilled cheese, almond flour bread.",
    "Dinner Grilled steak, roasted veggies, butter."
  ]
};

const meal_date = 1675062129;

let insertMeals =``;

for (const day in mealPlan) {
  for(const meal of mealPlan[day]){
    insertMeals += `
    insert into meals_tracker (meal_name, meal_date, completion, user_id) values ( '${meal}',${meal_date + 60*60*24*(day-1)}, $1, $2);
    `
  }
}
  
console.log(insertMeals)