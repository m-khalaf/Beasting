//////////////////////////////////////
///////////User Routes///////////////
////////////////////////////////////
const express = require('express');
const router = express.Router();
const db = require('./dbQueries');
const {schedule} = require('./helper')

// This will load our initial load on every page refresh
router.get('/', (req, res) => {
  let userid = 1;
  db.getMeals().then((meals) => {

    if(meals.length !== 0) {
      db.getExercises().then((exercises) => {
        if(exercises.length !== 0) {
          //Parsing data and sending it to the user.
          // res.json(helper.schedule(meals, excerises, 1674869344));
          db.getExercisesTrack(userid).then((exerTrack) => {
            db.getMealsTrack(userid).then((mealTrack) => {
              console.log({ meals, exercises, exerTrack, mealTrack });
              res.json(schedule({ meals, exercises, exerTrack, mealTrack }));
              // // res.json({ meals, exercises, exerTrack, mealTrack });
            })
          })
          
        } else {
          res.json('ERROR');
        }
      })

    } else {
      res.json('ERROR');
    }
  })
})

// http://localhost:8080/home/edelete/:trackingId
router.delete('/edelete/:trackingId', (req, res) => {
  const trackingId = req.params.trackingId;
  const userId = 1;
  
  db.deleteExerciseTracking(trackingId, userId)
    .then(() => {
      db.getMeals().then((meals) => {
        if (meals.length !== 0) {
          db.getExercises().then((exercises) => {
            if (exercises.length !== 0) {
              db.getExercisesTrack(userId).then((exerTrack) => {
                db.getMealsTrack(userId).then((mealTrack) => {
                  res.json(schedule({ meals, exercises, exerTrack, mealTrack }));
                });
              });
            } else {
              res.json('ERROR');
            }
          });
        } else {
          res.json('ERROR');
        }
      });
    })
    .catch(err => res.json(err));
});

// http://localhost:8080/home/mdelete/:trackingId
router.delete('/mdelete/:trackingId', (req, res) => {
  const trackingId = req.params.trackingId;
  const userId = 1;
  
  db.deleteMealTracking(trackingId, userId)
    .then(() => {
      db.getMeals().then((meals) => {
        if (meals.length !== 0) {
          db.getExercises().then((exercises) => {
            if (exercises.length !== 0) {
              db.getExercisesTrack(userId).then((exerTrack) => {
                db.getMealsTrack(userId).then((mealTrack) => {
                  res.json(schedule({ meals, exercises, exerTrack, mealTrack }));
                });
              });
            } else {
              res.json('ERROR');
            }
          });
        } else {
          res.json('ERROR');
        }
      });
    })
    .catch(err => res.json(err));
});

// route to edit meal schedule
// [...meal, { id: 123, meal_name: mealName }];

// route to use a preset




module.exports = router;