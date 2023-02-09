import { useState, useEffect } from "react";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { sortExercises } from "../../helpers/sort";

export default function CreateExercise({
  onCreateExercise,
  modalExerciseIsOpen,
  setModalExerciseIsOpen,
  schedule_obj,
  refresh,
  setRefresh,
  day
}) {
  const [formData, setFormData] = useState({
    exerciseName: "",
    exerciseDetail: "",
  });
  const [sortedExercises, setSortedExercises] = useState(
    schedule_obj.exercises
  );


  useEffect(() => {
    setRefresh(refresh + 1)
    return setSortedExercises(
      sortExercises(schedule_obj.exercises, formData.exerciseName)
    );
  }, [formData]);

  // useEffect(() => {

  // }, [sortedExercises])
  console.log(sortedExercises, formData);

  const onHandleChange = (event) => {
    // event.preventDefault();
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const onHandleSubmit = (event) => {
    event.preventDefault();
    onCreateExercise(formData);
    // setFormData({ name: "", description: "" });
    setModalExerciseIsOpen(false);
  };

  const getUnixTime  = (day) => {
    const date = 1611626000;
    if(day === 'Monday') {
      return date;
    } else if (day === 'Tuesday') {
      return date + 1 * 24 * 60 * 60;
    } else if (day === 'Wednesday') {
      return date + 2 * 24 * 60 * 60;
    } else if (day === 'Thursday') {
      return date + 3 * 24 * 60 * 60;
    } else if (day === 'Friday') {
      return date + 4 * 24 * 60 * 60;
    }  else if (day === 'Saturday') {
      return date + 5 * 24 * 60 * 60;
    } else if (day === 'Sunday') {
      return date + 6 * 24 * 60 * 60;
  }
  }
  const saveExercise = () => {
    if(formData.exerciseDetail.length !== 0 && formData.exerciseName.length !== 0) {
      axios
        .post(`http://localhost:8000/home/save-exercise/`, {
          name: formData.exerciseName,
          detail: formData.exerciseDetail,
          day: getUnixTime(day)
        })
        .then((res) => {
          console.log("Completion status updated successfully", res.data);
          setRefresh(refresh + 1)
          onRequestClose()
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }

  const onRequestClose = () => setModalExerciseIsOpen(false);
  return (
    <div>
      <Modal isOpen={modalExerciseIsOpen}>
        <form onSubmit={onHandleSubmit}>
          <div class="row mb-3">
            <label class="col-sm-2 col-form-label">Create Exercise</label>
            <div class="col-sm-10">
              <input
                class="form-control"
                name="exerciseName"
                value={formData.exerciseName}
                onChange={onHandleChange}
              />
            </div>
          </div>

          <div class="row mb-3">
            <label class="col-sm-2 col-form-label">Add Exercise Detail</label>
            <div class="col-sm-10">
              <input
                class="form-control"
                name="exerciseDetail"
                value={formData.exerciseDetail}
                onChange={onHandleChange}
              />
              <div class="p-2"></div>
            </div>
          </div>
          <button class="btn btn-outline-primary mx-2" type="submit" onClick={saveExercise}>
            Save
          </button>
          <button class="btn btn-outline-primary mx-2" onClick={onRequestClose}>
            Close
          </button>
        </form>
        <div
          style={{
            width: "90%",
            height: "30px",
            display: "flex",
            flexWrap: "wrap",
          }}
        ></div>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {sortedExercises.map((exercise, index) => (
            <button
              class="btn btn-light"
              onMouseEnter={(e) => (e.target.style.backgroundColor = "orange")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#F6F6F6")}
              key={index}
              onClick={() => {
                setFormData({
                  exerciseName: exercise.exercise_name,
                  exerciseDetail: exercise.exercise_detail,
                });
              }}
            >
              {exercise.exercise_name}: {exercise.exercise_detail}
            </button>
          ))}
        </div>
      </Modal>
    </div>
  );
}
