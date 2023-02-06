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

// route to edit food schedhule


// route to edit meal schedule
// [...meal, { id: 123, meal_name: mealName }];

// route to use a preset


// route to add new exercises
router.post('/exercise', (req, res) => {
  let userid = req.body.userid;
  let exercise_id = req.body.exercise_id;
  let tracking_id = req.body.tracking_id;

  db.addExercise({ exercise_id, tracking_id, userid }).then((result) => {
    if (result) {
      res.json(result);
    } else {
      res.json({ message: 'Error adding exercise' });
    }
  })
    .catch((err) => {
      console.log(err.message);
      res.json({ message: 'Error adding exercise' });
    });
});

router.delete('/exercise', (req, res) => {
  let userid = req.body.userid;
  let tracking_id = req.body.tracking_id;

  db.deleteExercise({ tracking_id, userid }).then((result) => {
    if (result) {
      res.json(result);
    } else {
      res.json({ message: 'Error deleting exercise' });
    }
  })
    .catch((err) => {
      console.log(err.message);
      res.json({ message: 'Error deleting exercise' });
    });
});

module.exports = router;