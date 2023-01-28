import "./App.scss";
import DayList from "./DayList";

let schedule_obj = {
  score: 0,

  meal_object: {
    monday: [
      { name: "apple", id: 1002 },
      { name: "burger", id: 999 },
      { name: "turkey", id: 805 },
    ],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
    sunday: [],
  },

  exercises: {
    monday: [
      {
        name: "running",
        id: 888,
        description: "10 minutes, 1 minute rest, 2 sets",
      },
      { name: "bench", id: 888, description: "2sets of 10 reps, 70%max" },
    ],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
    sunday: [],
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
