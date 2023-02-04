-- join with user and select according to user id
SELECT exercise_name, exercise_detail, Exercise_TRACKing.id as tracking_id, completion,exercise_date FROM exercises
JOIN Exercise_TRACKing
ON Exercise_TRACKing.Exercise_id = exercises.id;

-- good
Select * from exercises;

-- good
SELECT * from meals;

-- join with user and select according to user id
SELECT meals.meal_name, MEALS_TRACKER.id as tracking_id, MEALS_TRACKER.meal_date, MEALS_TRACKER.completion FROM meals
JOIN MEALS_TRACKER ON MEALS_TRACKER.meal_id = meals.id

--Update exercises for week
--the ones with matching tracking_ids are not changed
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