import "./App.scss";
import DayList from "./DayList";
import Show from "./cards/Show";
import { useState } from "react";

let schedule_obj = {
  score: 0,

  days: [
    {
      id: 1,
      name: "Monday",
      meals: [1, 2],
      exercises: [1, 2],
    },
    {
      id: 2,
      name: "Tuesday",
      meals: [3, 4],
      exercises: [3, 4],
    },
    {
      id: 3,
      name: "Wednesday",
      meals: [5, 6],
      exercises: [5, 6],
    },
    {
      id: 4,
      name: "Thursday",
      meals: [7, 8],
      exercises: [7, 8],
    },
    {
      id: 5,
      name: "Friday",
      meals: [9, 10],
      exercises: [9, 10],
    },
  ],
  exercises: {
    1: {
      id: 1,
      name: "running",
      description: "10 minutes, 1 minute rest, 2 sets",
    },
    2: {
      id: 2,
      name: "bench",
      description: "2sets of 10 reps, 70%max",
    },
  },
  meals: {
    1: {
      id: 1,
      name: "chicken",
    },
    2: {
      id: 2,
      name: "milk",
    },
  },
};

const exc_aray = [
  {
    id: 1,
    name: "running",
    description: "10 minutes, 1 minute rest, 2 sets",
  },
  {
    id: 2,
    name: "bench",
    description: "2sets of 10 reps, 70%max",
  },
];

const meals_array = [
  {
    id: 1,
    name: "chicken",
  },
  {
    id: 2,
    name: "milk",
  },
];

function App() {
  const [Day, setDay] = useState("Monday");
  console.log(Day);

  const excercises = exc_aray.map((exc) => {
    return <Show name={exc.name} description={exc.description}></Show>;
  });

  const meals = meals_array.map((meal) => {
    return <Show name={meal.name}></Show>;
  });

  return (
    <main className="layout">
      <section className="sidebar">
        <hr className="sidebarseparator sidebar--centered" />
        <nav className="sidebarmenu">
          <DayList schedule_obj={schedule_obj} onClick={setDay} />
        </nav>
      </section>

      <section>{excercises}</section>
      <section>{meals}</section>
    </main>
  );
}

export default App;
