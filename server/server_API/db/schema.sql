-- drop tables
DROP TABLE IF EXISTS meals CASCADE;
DROP TABLE IF EXISTS MEALS_TRACKER CASCADE;
DROP TABLE IF EXISTS exercises CASCADE;
-- -- DROP TABLE IF EXISTS exercise_plans CASCADE;
DROP TABLE IF EXISTS exercise_tracking CASCADE;
DROP TABLE IF EXISTS users CASCADE;


create table exercises (
	id SERIAL PRIMARY KEY NOT NULL,
	exercise_name VARCHAR(50),
	exercise_detail VARCHAR(255) NOT NULL,
	created_at timestamp default current_timestamp,
	updated_at timestamp default current_timestamp
	-- bodyPart
	-- reps
	-- weight
);

-- NEW
-- create table exercise_plans (
-- 	id SERIAL PRIMARY KEY NOT NULL,
-- 	name string,
-- 	exercises string,
-- 	created_at timestamp default current_timestamp
-- );

create table exercise_tracking (
	id SERIAL PRIMARY KEY NOT NULL,
	exercise_name VARCHAR(50),
	exercise_detail VARCHAR(255) NOT NULL,
	completion BOOLEAN NOT NULL,
	exercise_date INT,
	user_id INT,
	created_at timestamp default current_timestamp,
	updated_at timestamp default current_timestamp
	-- 1 rep max
);


create table meals (
	id SERIAL PRIMARY KEY NOT NULL,
	meal_name VARCHAR(255) NOT NULL,
	created_at timestamp default current_timestamp,
	updated_at timestamp default current_timestamp
	-- calories
	-- carbs
	-- protein
	-- 
);

create table meals_tracker (
	id SERIAL PRIMARY KEY NOT NULL,
	meal_date INT NOT NULL,
	meal_name VARCHAR(255) NOT NULL, 
	completion BOOLEAN NOT NULL,
	user_id INT,
	created_at timestamp default current_timestamp,
	updated_at timestamp default current_timestamp
);

create table users (
	id SERIAL PRIMARY KEY NOT NULL,
	name VARCHAR(50),
	email VARCHAR(50),
	password VARCHAR(50),
	score INTEGER,
	created_at timestamp default current_timestamp,
	updated_at timestamp default current_timestamp
);


