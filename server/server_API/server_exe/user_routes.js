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
  const completion = req.body.completion? 'true':'false';
  const userId = 1;

  console.log(req.body)

  db.completeExerciseTracking(trackingId, completion)
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
  const completion = req.body.completion? 'true':'false';
  const userId = 1;
  
  db.completeMealTracking(trackingId, completion)
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

router.post('/save-meal/', (req, res) => {
  let date = req.body.day; 
  const meal_name = req.body.name;
  const userId = 1;
  
  db.saveMeal(date, meal_name, 'false', userId)
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

router.post('/save-exercise/', (req, res) => {
  let date = req.body.day; 
  const exercise_name = req.body.name;
  const exercise_detail = req.body.detail;
  const userId = 1;
  
  db.saveExercise( exercise_name, exercise_detail, 'false', date, userId)
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


router.post('/save-meal-plan/', (req, res) => {
  let date = req.body.day; 
  const mealPlan = req.body.plan;
  const userId = 1;
  
  db.saveMealPlan(date, mealPlan, 'false', userId)
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



router.post('/save-exer-plan/', (req, res) => {
  let date = req.body.day; 
  const exerPlan = req.body.plan;
  const userId = 1;
  
  db.saveExercisePlan(date, exerPlan, 'false', userId)
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

module.exports = router;