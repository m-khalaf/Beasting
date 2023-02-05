-- join with user and select according to user id
SELECT users.id, exercise_name, exercise_detail, Exercise_TRACKing.id as tracking_id, completion,exercise_date 
FROM exercises
JOIN Exercise_TRACKing
ON Exercise_TRACKing.Exercise_id = exercises.id
JOIN users
ON users.id = exercise_tracking.user_id
WHERE users.id = 1;

-- good
Select * from exercises;

-- good
SELECT * from meals;

-- join with user and select according to user id
SELECT users.id, meals.meal_name, MEALS_TRACKER.id as tracking_id, MEALS_TRACKER.meal_date, MEALS_TRACKER.completion 
FROM meals
JOIN MEALS_TRACKER 
ON MEALS_TRACKER.meal_id = meals.id
JOIN users
ON users.id = meals_tracker.user_id
WHERE users.id = 1;

-- we are given a new list of exercises, their ids and the unique tracking id
--delete exercises for the week previously set except the ones with matching tracking_ids with the current new
--add new ones 
--according to user ID

--Update meals for week
--the ones with matching tracking_ids are not changed
--add new ones 
-- according to user ID

--query to add new exercises

--query to add new meals

--Completing tracking

--Completing tracking

-- create a qury that deletes an entry from exercise tracking based on tracking id and user id