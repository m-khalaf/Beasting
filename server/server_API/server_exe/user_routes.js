//////////////////////////////////////
///////////User Routes///////////////
////////////////////////////////////
const express = require("express");
const router = express.Router();
const db = require("./dbQueries");
const { schedule } = require("./helper");

router.get("/users", (req, res) => {
  db.getUsers().then((users) => {
    console.log(users);
    return res.json(users);
  });
});

router.get("/users/:id", (req, res) => {
  const userId = req.params.id;
  db.getUserById(userId).then((users) => {
    console.log(users);
    return res.json(users);
  });
});

router.post("/users", (req, res) => {
  console.log("----rebody---", req.body);
  const { name, email, password } = req.body;
  if (!name) {
    return res.status(400).json({ message: "name cannot be empty" });
  } //validate for the other two

  db.getUserByEmail(email).then((user) => {
    if (user) {
      //reject registration
      return res.status(400).json({ message: "email is regestired " });
    }

    db.createUser(name, email, password).then((user) => {
      return res.status(200).json({ message: "user is created ", user });
    });
  });
});

// This will load our initial load on every page refresh
router.get("/", (req, res) => {
  let userid = 1;
  db.getMeals().then((meals) => {
    if (meals.length !== 0) {
      db.getExercises().then((exercises) => {
        if (exercises.length !== 0) {
          //Parsing data and sending it to the user.
          // res.json(helper.schedule(meals, excerises, 1674869344));
          db.getExercisesTrack(userid).then((exerTrack) => {
            db.getMealsTrack(userid).then((mealTrack) => {
              console.log({ meals, exercises, exerTrack, mealTrack });
              res.json(schedule({ meals, exercises, exerTrack, mealTrack }));
              // // res.json({ meals, exercises, exerTrack, mealTrack });
            });
          });
        } else {
          res.json("ERROR");
        }
      });
    } else {
      res.json("ERROR");
    }
  });
});

// route to edit food schedhule

// route to edit meal schedule

// route to use a preset

// route to add new exercises

module.exports = router;
