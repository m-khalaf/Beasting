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
          db.getExercisesTrack(userid).then((exerTrack) => {
            db.getMealsTrack(userid).then((mealTrack) => {
              
              res.json(schedule({ meals, exercises, exerTrack, mealTrack }));
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

// http://localhost:8000/home/edelete/:trackingId
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

// http://localhost:8000/home/mdelete/:trackingId
router.delete('/mdelete/:trackingId', (req, res) => {
  const trackingId = req.params.trackingId;
  const userId = 1;
  console.log('++--', res.params)
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

// http://localhost:8000/home/excomplete/
router.post('/excomplete/', (req, res) => {
  
  const trackingId = req.body.trackingId;
  const userId = 1;

  console.log(req.body)

  db.completeExerciseTracking(trackingId)
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

router.post('/mcomplete/', (req, res) => {
  const trackingId = req.body.trackingId;
  const userId = 1;
  
  db.completeMealTracking(trackingId)
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

// route to use a preset

module.exports = router;