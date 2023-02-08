import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Switch, Grid } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashAlt,
  faEdit,
  faPlus,
  faL,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/OutlinedCard.css";
import axios from "axios";

// const handleDelete = (id) => {
//   axios
//   .delete(`http://localhost:8000/home/edelete/${id}`)
//   .then((res) => {
//   console.log("Completion status updated successfully", id);
//   })
//   .catch((err) => {
//   console.error(err);
//   });
// };

const EditIcon = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faEdit} className="fa-edit" />
    </div>
  );
};

const handleCompletion = (trackingId, completion) => {
  axios
    .post(`http://localhost:8000/home/excomplete/`, {
      completion: !completion,
      trackingId: trackingId,
    })
    .then((res) => {
      console.log("Completion status updated successfully", res.data);
    })
    .catch((err) => {
      console.error(err);
    });
};

// const DeleteIcon = (props) => (
//   <div>
//     <FontAwesomeIcon
//       icon={faTrashAlt}
//       className="fa-trash-alt"
//       onClick={props.onClick}
//     />
//   </div>
// );

const deleteExc = (id) => {
  axios
    .delete(`http://localhost:8000/home/edelete/${id}`)
    .then((res) => {
      console.log("Completion status updated successfully", id);
    })
    .catch((err) => {
      console.error(err);
    });
};

const DeleteIcon = (props) => (
  <div>
    <FontAwesomeIcon
      icon={faTrashAlt}
      className="fa-trash-alt"
      onClick={() => {
        deleteExc(props.tracking_id);
        props.setRefresh(props.refresh + 1);
      }}
    />
  </div>
);
export default function OutlinedCard(props) {
  // const [exercises, setExercises] = React.useState(props.excercises);

  // const handleDelete = (id) => {
  //   axios
  //     .delete(`http://localhost:8000/home/edelete/${id}`)
  //     .then(() => {
  //       console.log("Deleted successfully", id);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // };
  const card = props.excercises.map((excercise) => {
    return (
      <React.Fragment className="card-container">
        <CardContent className="card card-content">
          <Typography variant="h5" component="div" className="exercise-name">
            {excercise.exercise_name}
          </Typography>

          <Typography variant="body2">
            {excercise.exercise_detail}
            <CardActions className="card-actions bottom-div">
              <Grid.Container>
                <Grid>
                  <Switch
                    color="success"
                    checked={excercise.completion}
                    onClick={() => {
                      handleCompletion(
                        excercise.tracking_id,
                        excercise.completion
                      );
                    }}
                  />
                </Grid>
              </Grid.Container>
              <EditIcon />
              <DeleteIcon
                tracking_id={excercise.tracking_id}
                refresh={props.refresh}
                setRefresh={props.setRefresh}
              />
            </CardActions>
          </Typography>
        </CardContent>
      </React.Fragment>
    );
  });

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
