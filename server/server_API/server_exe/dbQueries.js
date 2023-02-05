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
      `Select * from exercises
       WHERE id = 1`
    )
      .then((result) => {
        // console.log(result)
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

  getExercisesTrack: (userid) => {
    let queryString = 
    `SELECT exercise_name, exercise_detail, exercise_tracking.id AS tracking_id, completion, exercise_date
    FROM exercises
    JOIN exercise_tracking
    ON exercise_tracking.exercise_id = exercises.id
    WHERE exercise_tracking.user_id = $1;
    `;

    const values = [`${userid}`];
    
    return pool.query(queryString, values).then((result) => {
        // console.log(result['rows'])
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

  getMealsTrack:(userid) => {
    return pool.query(
      `SELECT meals.meal_name, MEALS_TRACKER.id as tracking_id, MEALS_TRACKER.meal_date, MEALS_TRACKER.completion 
      FROM meals
      JOIN MEALS_TRACKER 
      ON MEALS_TRACKER.meal_id = meals.id
      WHERE meals_tracker.user_id = $1;
    `, [userid]
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

  addExercise:(name ,desciption) => {
    let queryString = 
    ``;

    const values = [name, desciption];

    return pool.query(queryString, values)
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

  addMeal:(name ,desciption) => {
    let queryString = 
    ``;

    const values = [name, desciption];

    return pool.query(queryString, values)
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


}