import React, { useState, useEffect } from "react";
import Modal from "react-modal";

function sortExercises(exerciseArray, stringToMatch) {
  return exerciseArray.sort((a, b) => {
    const aMatch = a.exercise_name.toLowerCase().includes(stringToMatch.toLowerCase());
    const bMatch = b.exercise_name.toLowerCase().includes(stringToMatch.toLowerCase());
    
    if (aMatch && !bMatch) return -1;
    if (!aMatch && bMatch) return 1;
    if (!aMatch && !bMatch) return 0;
    
    const aIndex = a.exercise_name.toLowerCase().indexOf(stringToMatch.toLowerCase());
    const bIndex = b.exercise_name.toLowerCase().indexOf(stringToMatch.toLowerCase());
    
    return aIndex - bIndex;
  });
}

const Form = (props) => {
  const [exercise, setExercise] = useState({ name: "", description: "" });
  const [sortedExercises, setSortedExercises] = useState(props.schedule_obj.exercises);
  useEffect(() => {
    setSortedExercises(sortExercises(props.schedule_obj.exercises, exercise.name));
  }, [exercise, props.schedule_obj.exercises]);

  const handleChange = (event) => {
    setExercise({ ...exercise, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addExercise(exercise);
    setExercise({ name: "", description: "" });
    props.setModalIsOpen(false);
  };
  console.log(exercise);
  return (
    <div>
      <Modal
        isOpen={props.modalIsOpen}
        onRequestClose={() => props.setModalIsOpen(false)}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            width: "400px",
            height: "400px",
          },
        }}
      >
        <h2>Add Excercise</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="excerciseName">Excercise Name:</label>
            <input
              type="text"
              id="name"
              value={exercise.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="excerciseDescription">Excercise Description:</label>
            <textarea
              id="description"
              value={exercise.description}
              onChange={handleChange}
              />
            </div>
            <button type="submit">Save</button>
          </form>
          <div style={{width: '90%', height: '30px', display: 'flex', flexWrap: 'wrap'}}></div>
          <div style={{display: 'flex', flexWrap: 'wrap'}}>
            {sortedExercises.map((exercise, index) => (
              <button style={{
                width: '30%',
                height: '100px',
                margin: '0px',
                backgroundColor: '#dee3e0',
                transition: 'background-color 0.2s ease-in-out',
                cursor: 'pointer'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = 'orange'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#dee3e0'}
                key={index}>
                {exercise.exercise_name}: {exercise.exercise_detail}
              </button>
            ))}
          </div>
        </Modal>
        
      </div>
    );
  };
  
  export default Form;



