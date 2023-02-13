const ketoMealPlan = {
  1: [
    "Breakfast: Scrambled eggs, bacon, avocado.",
    "Lunch: Grilled chicken, mixed greens, olive oil.",
    "Dinner: Beef stir-fry, veggies, coconut oil."
  ],
  2: [
    "Breakfast: Chia seed pudding, almond milk, berries.",
    "Lunch: Tuna salad, avocado, mixed greens.",
    "Dinner: Pork chops, roasted veggies, butter."
  ],
  3: [
    "Breakfast: Almond milk smoothie, spinach, nut butter.",
    "Lunch: Chicken Caesar salad, low-carb dressing.",
    "Dinner: Baked salmon, cauliflower rice, veggies."
  ],
  4: [
    "Breakfast: Vegetable omelette, cheese, mushrooms.",
    "Lunch: Grilled cheese, almond flour bread.",
    "Dinner: Beef burgers, cheese, mixed greens."
  ],
  5: [
    "Breakfast: Yogurt, mixed berries, almond butter.",
    "Lunch: Grilled chicken, roasted veggies, mixed greens.",
    "Dinner: Shrimp stir-fry, veggies, coconut oil."
  ],
  6: [
    "Breakfast: Almond milk smoothie, spinach, nut butter.",
    "Lunch: Grilled chicken, mixed greens, olive oil.",
    "Dinner: Stuffed bell peppers, ground beef, cheese."
  ],
  7: [
    "Breakfast: Eggs Benedict, low-carb muffin, hollandaise.",
    "Lunch: Grilled cheese, almond flour bread.",
    "Dinner: Grilled steak, roasted veggies, butter."
  ]
};

const veganMealPlan = {
  1: [
    "Breakfast: Tofu scramble, mixed veggies, whole grain toast.",
    "Lunch: Chickpea salad, mixed greens, vinaigrette dressing.",
    "Dinner: Lentil stew, mixed veggies, crusty bread."
  ],
  2: [
    "Breakfast: Oatmeal, almond milk, mixed berries, nuts.",
    "Lunch: Veggie wrap, mixed veggies, hummus.",
    "Dinner: Roasted veggies, quinoa, tahini dressing."
  ],
  3: [
    "Breakfast: Smoothie bowl, almond milk, frozen berries, nut butter.",
    "Lunch: Grilled portobello mushrooms, mixed greens, balsamic glaze.",
    "Dinner: Pasta, marinara sauce, roasted veggies, garlic bread."
  ],
  4: [
    "Breakfast: Chia seed pudding, almond milk, mixed berries.",
    "Lunch: Grilled eggplant, mixed greens, balsamic glaze.",
    "Dinner: Vegetable stir-fry, mixed veggies, rice."
  ],
  5: [
    "Breakfast: Avocado toast, mixed veggies, whole grain toast.",
    "Lunch: Grilled tofu, mixed greens, teriyaki sauce.",
    "Dinner: Lentil burgers, mixed greens, whole grain buns."
  ],
  6: [
    "Breakfast: Smoothie bowl, almond milk, frozen berries, nut butter.",
    "Lunch: Veggie burger, mixed greens, whole grain buns.",
    "Dinner: Ratatouille, crusty bread, mixed greens."
  ],
  7: [
    "Breakfast: Pancakes, almond milk, mixed berries, syrup.",
    "Lunch: Grilled portobello mushrooms, mixed greens, balsamic glaze.",
    "Dinner: Chili, mixed veggies, cornbread."
  ]
};

const pescatarianMealPlan = {
  1: [
    "Breakfast: Smoked salmon, avocado, whole grain toast.",
    "Lunch: Grilled shrimp, mixed greens, lemon vinaigrette.",
    "Dinner: Fish tacos, mixed veggies, salsa, whole grain tortilla."
  ],
  2: [
    "Breakfast: Omelette, mixed veggies, cheese, whole grain toast.",
    "Lunch: Tuna salad, mixed greens, whole grain crackers.",
    "Dinner: Grilled salmon, roasted veggies, quinoa."
  ],
  3: [
    "Breakfast: Yogurt, mixed berries, granola, honey.",
    "Lunch: Grilled scallops, mixed greens, lemon vinaigrette.",
    "Dinner: Fish curry, mixed veggies, rice."
  ],
  4: [
    "Breakfast: Scrambled eggs, smoked salmon, whole grain toast.",
    "Lunch: Shrimp salad, mixed greens, lemon vinaigrette.",
    "Dinner: Grilled swordfish, mixed veggies, quinoa."
  ],
  5: [
    "Breakfast: Smoothie bowl, almond milk, mixed berries, nut butter.",
    "Lunch: Grilled shrimp, mixed greens, teriyaki sauce.",
    "Dinner: Fish stew, mixed veggies, crusty bread."
  ],
  6: [
    "Breakfast: Pancakes, almond milk, mixed berries, syrup.",
    "Lunch: Tuna sandwich, mixed greens, whole grain bread.",
    "Dinner: Grilled lobster, mixed veggies, garlic butter."
  ],
  7: [
    "Breakfast: Bagel, smoked salmon, cream cheese, mixed greens.",
    "Lunch: Grilled octopus, mixed greens, lemon vinaigrette.",
    "Dinner: Seafood paella, mixed veggies, crusty bread."
  ]
};

const intermediateWorkoutPlan = {
  0: [["Warm-up", "10-15 minutes of cardio (jogging, jumping jacks, etc.)"],
      ["Barbell squats", "3 sets of 8-12 reps"],
      ["Barbell bench press", "3 sets of 8-12 reps"],
      ["Barbell deadlifts", "3 sets of 8-12 reps"],
      ["Dumbbell bicep curls", "3 sets of 8-12 reps"],
      ["Dumbbell tricep extensions", "3 sets of 8-12 reps"]],
  1: [["Warm-up", "10-15 minutes of cardio (jogging, jumping jacks, etc.)"],
      ["Barbell rows", "3 sets of 8-12 reps"],
      ["Barbell overhead press", "3 sets of 8-12 reps"],
      ["Dumbbell flyes", "3 sets of 8-12 reps"],
      ["Dumbbell hammer curls", "3 sets of 8-12 reps"],
      ["Tricep pushdowns", "3 sets of 8-12 reps"]],
  2: [["Rest day"]],
  3: [["Warm-up", "10-15 minutes of cardio (jogging, jumping jacks, etc.)"],
      ["Barbell squats", "3 sets of 8-12 reps"],
      ["Barbell bench press", "3 sets of 8-12 reps"],
      ["Barbell deadlifts", "3 sets of 8-12 reps"],
      ["Dumbbell bicep curls", "3 sets of 8-12 reps"],
      ["Dumbbell tricep extensions", "3 sets of 8-12 reps"]],
  4: [["Warm-up", "10-15 minutes of cardio (jogging, jumping jacks, etc.)"],
      ["Barbell rows", "3 sets of 8-12 reps"],
      ["Barbell overhead press", "3 sets of 8-12 reps"],
      ["Dumbbell flyes", "3 sets of 8-12 reps"],
      ["Dumbbell hammer curls", "3 sets of 8-12 reps"],
      ["Tricep pushdowns", "3 sets of 8-12 reps"]],
  5: [["Rest day"]],
  6: [["Rest day"]],
  7: [["Rest day"]]
};

const beginnerWorkoutPlan = {
  0: [["Warm-up", "5-10 minutes of light cardio (jogging, jumping jacks, etc.)"],
  ["Bodyweight squats", "3 sets of 8-12 reps"],
  ["Push-ups", "3 sets of 8-12 reps"],
  ["Dumbbell rows (using a broomstick or gallon jug of water)", "3 sets of 8-12 reps"],
  ["Plank", "Hold for 30-60 seconds"]],
  1: [["Warm-up", "5-10 minutes of light cardio (jogging, jumping jacks, etc.)"],
  ["Lunges", "3 sets of 8-12 reps per leg"],
  ["Dumbbell bicep curls", "3 sets of 8-12 reps"],
  ["Tricep dips (using a chair or bench)", "3 sets of 8-12 reps"],
  ["Wall sit", "Hold for 30-60 seconds"]],
  2: [["Rest day"]],
  3: [["Warm-up", "5-10 minutes of light cardio (jogging, jumping jacks, etc.)"],
  ["Bodyweight squats", "3 sets of 8-12 reps"],
  ["Push-ups", "3 sets of 8-12 reps"],
  ["Dumbbell rows (using a broomstick or gallon jug of water)", "3 sets of 8-12 reps"],
  ["Plank", "Hold for 30-60 seconds"]],
  4: [["Warm-up", "5-10 minutes of light cardio (jogging, jumping jacks, etc.)"],
  ["Lunges", "3 sets of 8-12 reps per leg"],
  ["Dumbbell bicep curls", "3 sets of 8-12 reps"],
  ["Tricep dips (using a chair or bench)", "3 sets of 8-12 reps"],
  ["Wall sit", "Hold for 30-60 seconds"]],
  5: [["Rest day"]],
  6: [["Rest day"]],
  7: [["Rest day"]]
  };

  const expertWorkoutPlan = {
    0: [["Warm-up", "10-15 minutes of cardio (jogging, jumping jacks, etc.)"],
        ["Barbell squats", "5 sets of 8-12 reps with heavy weights"],
        ["Barbell bench press", "5 sets of 8-12 reps with heavy weights"],
        ["Barbell deadlifts", "5 sets of 8-12 reps with heavy weights"],
        ["Dumbbell bicep curls", "3 sets of 8-12 reps with heavy weights"],
        ["Dumbbell tricep extensions", "3 sets of 8-12 reps with heavy weights"],
        ["Planks", "3 sets of 1 minute hold"],
        ["Lunges", "3 sets of 8-12 reps per leg"],
        ["Push-ups", "3 sets of 8-12 reps"]],
    1: [["Warm-up", "10-15 minutes of cardio (jogging, jumping jacks, etc.)"],
        ["Barbell rows", "5 sets of 8-12 reps with heavy weights"],
        ["Barbell overhead press", "5 sets of 8-12 reps with heavy weights"],
        ["Dumbbell flyes", "3 sets of 8-12 reps with heavy weights"],
        ["Dumbbell hammer curls", "3 sets of 8-12 reps with heavy weights"],
        ["Tricep pushdowns", "3 sets of 8-12 reps with heavy weights"],
        ["Leg raises", "3 sets of 12 reps"],
        ["Russian twists", "3 sets of 12 reps per side"],
        ["Burpees", "3 sets of 12 reps"]],
    2: [["Warm-up", "10-15 minutes of cardio (jogging, jumping jacks, etc.)"],
        ["Barbell squats", "5 sets of 8-12 reps with heavy weights"],
        ["Barbell bench press", "5 sets of 8-12 reps with heavy weights"],
        ["Barbell deadlifts", "5 sets of 8-12 reps with heavy weights"],
        ["Dumbbell bicep curls", "3 sets of 8-12 reps with heavy weights"],
        ["Dumbbell tricep extensions", "3 sets of 8-12 reps with heavy weights"],
        ["Planks", "3 sets of 1 minute hold"],
        ["Lunges", "3 sets of 8-12 reps per leg"],
        ["Push-ups", "3 sets of 8-12 reps"]],
    3: [["Warm-up", "10-15 minutes of cardio (jogging, jumping jacks, etc.)"],
        ["Barbell rows", "5 sets of 8-12 reps with heavy weights"],
        ["Barbell overhead press", "5 sets of 8-12 reps with heavy weights"],
        ["Dumbbell flyes", "3 sets of 8-12 reps with heavy weights"],
        ["Dumbbell hammer curls", "3 sets of 8-12 reps with heavy weights"],
        ["Tricep pushdowns", "3 sets of 8-12 reps with heavy weights"],
        ["Leg raises", "3 sets of 12 reps"],
        ["Russian twists", "3 sets of 12 reps per side"],
        ["Burpees", "3 sets of 12 reps"]],
    4: [["Rest day"]],
    5: [["Rest day"]],
    6: [["Rest day"]]
  }

export {
  ketoMealPlan,
  veganMealPlan,
  pescatarianMealPlan,
  beginnerWorkoutPlan,
  intermediateWorkoutPlan,
  expertWorkoutPlan
}