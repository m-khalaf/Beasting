//////////////////////////////////////
///////////User Routes///////////////
////////////////////////////////////
const express = require('express');
const router = express.Router();
const db = require('./dbQueries');
const {schedule} = require('./helper')

// This will load our initial load on every page refresh
router.get('/', (req, res) => {
  
  db.getMeals().then((meals) => {

    if(meals.length !== 0) {
      db.getExercises().then((exercises) => {
        if(exercises.length !== 0) {
          //Parsing data and sending it to the user.
          // res.json(helper.schedule(meals, excerises, 1674869344));
          db.getExercisesTrack().then((exerTrack) => {
            db.getMealsTrack().then((mealTrack) => {
              res.json(schedule({ meals, exercises, exerTrack, mealTrack }));
              // res.json({ meals, exercises, exerTrack, mealTrack });
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


// route to use a preset


// route to add new exercises


module.exports = router;