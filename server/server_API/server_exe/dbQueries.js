///////////////////////////////////////////
///////////Database Queries///////////////
//////////////////////////////////////////

const pool = require('../db/connection');

module.exports = {
  
  // aggregate the meals from the two meal tables
  getMeals:() => {
    return pool.query(
      `SELECT id, meal_name from meals;`
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
      `Select id, exercise_name, exercise_detail from exercises`
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
    `SELECT exercise_name, exercise_detail, id AS tracking_id, completion, exercise_date
    FROM exercise_tracking
    WHERE user_id = $1;
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
      `SELECT meal_name, id as tracking_id, meal_date, completion 
      FROM MEALS_TRACKER 
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

  

  saveExercise: (exercise_name, exercise_detail, completion, exercise_date, user_id) => {
    return pool.query(
      `
        INSERT INTO exercise_tracking (exercise_name, exercise_detail, completion, exercise_date, user_id)
        VALUES ($1, $2, $3, $4, $5)
      `, [exercise_name, exercise_detail, completion, exercise_date, user_id]
    )
      .then((result) => {
        return result;
      })
      .catch((err) => {
        console.log(err.message);
      });
  },

  saveMeal: (meal_date, meal_name, completion, user_id) => {
    return pool.query(
      `
      insert into meals_tracker (meal_name, meal_date, completion, user_id) values ($2, $1, $3, $4);
      `, [meal_date, meal_name, completion, user_id]
    )
      .then((result) => {
        return result;
      })
      .catch((err) => {
        console.log(err.message);
      });
  },
  
 
  
  // Complete meal tracking
  completeMealTracking: (tracking_id, completion) => {
    return pool.query(
      `UPDATE meals_tracker
      SET completion = $2
      WHERE id = $1`, [tracking_id, completion]
    )
      .then((result) => {
        return result;
      })
      .catch((err) => {
        console.log(err.message);
      });
  },

  
  // Complete exercise tracking
  completeExerciseTracking: (tracking_id, completion) => {
    return pool.query(
      `UPDATE exercise_tracking
      SET completion = $2
      WHERE id = $1;
  `, [tracking_id, completion]
    )
      .then((result) => {
        return result;
      })
      .catch((err) => {
        console.log(err.message);
      });
  },

  deleteExerciseTracking: (trackingId, userId) => {
    return pool.query(
      `DELETE from exercise_tracking WHERE id = $1 AND user_id = $2`,
      [trackingId, userId]
      )
      .then((result) => {
      if (result) {
      return result;
      } else {
      return false;
      }
      })
      .catch((err) => {
      console.log(err.message);
      });
    },

    deleteMealTracking: (tracking_id, user_id) => {
      return pool.query(
      `DELETE FROM meals_tracker WHERE id = $1 AND user_id = $2`,
      [tracking_id, user_id]
      )
      .then((result) => {
      if (result) {
      return result;
      } else {
      return false;
      }
      })
      .catch((err) => {
      console.log(err.message);
      });
    },
}