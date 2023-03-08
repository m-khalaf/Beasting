import "./Schedule.css";
import DaysNavigationBar from "./DaysNavigationBar";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Gifbar from "./Gifbar";
import ProgressBar from "react-bootstrap/ProgressBar";

// import { schedule_obj } from "../mocks/mockData";
import {
  getexcerciseForDay,
  getMealForDay,
  mealCompletionPercentage,
  excerciseCompletionPercentage,
  daysArrayInit,
  initalData,
  initalWeek
} from "../../helpers/selectors";
import TopNav from "../TopNav";
import CreateMeal from "./createMeal";
import CreateExercise from "./createExercise";
import OutlinedCardExcercise from "./OutlinedCardExcercise";
import OutlinedCardMeal from "./OutlinedCardMeal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function App(props) {
  const [day, setDay] = useState(props.init);
  // What we added

  const [schedule_obj, setSchedule_obj] = useState(initalData);

  const [meal, setMeal] = useState([]);
  const [exercise, setExercise] = useState([]);
  const [modalExerciseIsOpen, setModalExerciseIsOpen] = useState(false);
  const [modalMealIsOpen, setModalMealIsOpen] = useState(false);
  const [refresh, setRefresh] = useState(0);
  const [unixDayArry, setUnixDayArray] = useState(initalWeek(props.init))
  useEffect(() => {
    axios.get("http://localhost:8080/home/").then((response) => {
      setSchedule_obj(response.data);
      console.log(response.data);
    });
  }, [refresh]);

  // this section describes the creating of new exercis and new meals
  // new meal section
  const handleCreateMeal = () => {
    setMeal([]);
  };

  // new exercise section
  const handleCreateExercise = () => {
    setExercise([]);
  };

  // this section describes the creating of new exercis and new meals END

  const excercises = getexcerciseForDay(schedule_obj, day);
  const mealCompletion = mealCompletionPercentage(schedule_obj.mealTrack);
  const excerCompletion = excerciseCompletionPercentage(schedule_obj.exerTrack);
  const meals = getMealForDay(schedule_obj, day);
  let date = new Date(day * 1000);
  let options = { month: "numeric", day: "numeric" };

  let date_uni = date.toLocaleDateString("en-US", options);
  let mealCompleted = Math.round(mealCompletion[date_uni]) || "0";
  let excerCompleted = Math.round(excerCompletion[date_uni]) || "0";
  const subtractUnixTime = function() {
    setDay(day - 604800);
    props.setUnixDay(day - 604800)
    setUnixDayArray(unixDayArry.map(a => a - 604800));
  }
  const addUnixTime = function() {
    setDay(day + 604800);
    props.setUnixDay(day + 604800)
    setUnixDayArray(unixDayArry.map(a => a + 604800));
  }
  return (
    <div>
      <main className="layout">
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
        <button onClick={subtractUnixTime}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>  
        <DaysNavigationBar
          daysArray={daysArrayInit}
          schedule_obj={schedule_obj}
          onChange={setDay}
          day={day}
          excercises={excercises}
          meals={meals}
          unixDayArry={unixDayArry}
        />
        <button onClick={addUnixTime}>
        <FontAwesomeIcon icon={faArrowRight} />
        </button>
        </div>
        <Gifbar gif={"exer"}></Gifbar>
        <section className="excercise">
          <div>
            <span>Exercises</span>
            <FontAwesomeIcon
              icon={faPlus}
              className="faPlus"
              onClick={() => {
                setModalExerciseIsOpen(true);
              }}
            />
            <ProgressBar now={excerCompleted} label={`${excerCompleted}%`} />
          </div>
          <CreateExercise
            modalExerciseIsOpen={modalExerciseIsOpen}
            setModalExerciseIsOpen={setModalExerciseIsOpen}
            onCreateExercise={handleCreateExercise}
            schedule_obj={schedule_obj}
            refresh={refresh}
            setRefresh={setRefresh}
            day={day}
          />
          <OutlinedCardExcercise
            excercises={excercises}
            refresh={refresh}
            setRefresh={setRefresh}
          />
        </section>
        <Gifbar gif={"meal"}></Gifbar>
        <section className="meal">
          <div>
            <span>Meals</span>
            <FontAwesomeIcon
              icon={faPlus}
              onClick={() => {
                setModalMealIsOpen(true);
              }}
              className="faPlus"
            />
            <ProgressBar now={mealCompleted} label={`${mealCompleted}%`} />
          </div>
          <CreateMeal
            modalMealIsOpen={modalMealIsOpen}
            setModalMealIsOpen={setModalMealIsOpen}
            onCreateMeal={handleCreateMeal}
            schedule_obj={schedule_obj}
            refresh={refresh}
            setRefresh={setRefresh}
            day={day}
          />
          <OutlinedCardMeal
            meals={meals}
            refresh={refresh}
            setRefresh={setRefresh}
          />
        </section>
        <div class="smiley-face" data-score="50"  style={{ height: "300px"}}>
          <div class="smiley-face-inner">
            <div class="smiley-face-circle"></div>
            <div class="smiley-face-eyes"></div>
            <div class="smiley-face-mouth"></div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
