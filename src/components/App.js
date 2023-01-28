import "./App.scss";
import DayList from "./DayList";

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

function App() {
  return (
    <main className="layout">
      <section className="sidebar">
        <hr className="sidebarseparator sidebar--centered" />
        <nav className="sidebarmenu">
          <div className="App">
            <DayList schedule_obj={schedule_obj} />
          </div>
          {/* <DayList
            // days={state.days}
            // value={state.day}
            // onChange={setDay}
          /> */}
        </nav>
      </section>
    </main>
  );
}

export default App;
