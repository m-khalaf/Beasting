import React, { useState } from "react";
import Modal from "react-modal";

const Form = (props) => {
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
        <form>
          <div>
            <label htmlFor="excerciseName">Excercise Name:</label>
            <input type="text" id="excerciseName" />
          </div>
          <div>
            <label htmlFor="excerciseDescription">Excercise Description:</label>
            <textarea id="excerciseDescription" />
          </div>
          <button type="submit">Save</button>
        </form>
      </Modal>
    </div>
  );
};

export default Form;
