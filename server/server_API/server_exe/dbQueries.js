///////////////////////////////////////////
///////////Database Queries///////////////
//////////////////////////////////////////

const pool = require('../db/connection');

module.exports = {
  
  // aggregate the meals from the two meal tables
  getMeals:() => {
    return pool.query(
      `SELECT * from meals`
    )
      .then((result) => {
        
        if (result) {
          if (result['rows'].length !== 0) {
            return result['rows'];
          } else {
            return false;
          }
        } else {
          return false;
        }

      })
      .catch((err) => {
        console.log(err.message);
      });
  },
  
  // aggregate the excerises from the two meal tables
  getExercises:() => {
    return pool.query(
      `Select * from exercises`
    )
      .then((result) => {
        if (result) {
          if (result['rows'].length !== 0) {
            // Returns true if user email is in database
            return result['rows'];
          } else {
            return false;
          }
        } else {
          return false;
        }

      })
      .catch((err) => {
        console.log(err.message);
      });
  },

  getExercisesTrack:() => {
    return pool.query(
      `SELECT exercise_name, exercise_detail, Exercise_TRACKing.id as tracking_id, completion,exercise_date FROM exercises
      JOIN Exercise_TRACKing
      ON Exercise_TRACKing.Exercise_id = exercises.id`
    )
      .then((result) => {
        if (result) {
          if (result['rows'].length !== 0) {
            // Returns true if user email is in database
            return result['rows'];
          } else {
            return false;
          }
        } else {
          return false;
        }

      })
      .catch((err) => {
        console.log(err.message);
      });
  },

  getMealsTrack:() => {
    return pool.query(
      `SELECT meals.meal_name, MEALS_TRACKER.id as tracking_id, MEALS_TRACKER.meal_date, MEALS_TRACKER.completion FROM meals
      JOIN MEALS_TRACKER ON MEALS_TRACKER.meal_id = meals.id`
    )
      .then((result) => {
        if (result) {
          if (result['rows'].length !== 0) {
            // Returns true if user email is in database
            return result['rows'];
          } else {
            return false;
          }
        } else {
          return false;
        }

      })
      .catch((err) => {
        console.log(err.message);
      });
  },


}