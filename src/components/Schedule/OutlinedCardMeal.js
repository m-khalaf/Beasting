import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Switch, Grid, Checkbox } from "@nextui-org/react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";
import "../../styles/OutlinedCard.css";

const EditIcon = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faEdit} className="fa-edit" />
    </div>
  );
};

const handleCompletion = (trackingId, completion) => {
  axios
    .post(`http://localhost:8000/home/mcomplete/`, {
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

const deleteMeal = (id) => {
  axios
    .delete(`http://localhost:8000/home/mdelete/${id}`)
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
        deleteMeal(props.id);
        props.setRefresh(props.refresh + 1);
      }}
    />
  </div>
);

export default function OutlinedCardMeal(props) {
  const card = props.meals.map((meal) => {
    return (
      <React.Fragment className="card-container">
        <CardContent className="card card-content">
          <Typography
            variant="h5"
            component="div"
            className="exercise-name"
            style={{ fontSize: "14px" }}
          >
            {meal.meal_name}
          </Typography>

          <Typography variant="body2" style={{ fontSize: "12px" }}>
            {/* {meal.meal_detail} */}
            <CardActions className="card-actions">
              <Grid.Container>
                <Grid>
                  <Checkbox
                    isSelected={meal.completion}
                    checked={meal.completion}
                    color="success"
                    onChange={() => {
                      handleCompletion(meal.tracking_id, meal.completion);
                      props.setRefresh(props.refresh + 1);
                    }}
                  ></Checkbox>
                  {/* <Switch
                    color="success"
                    checked={meal.completion}
                    onClick={() => {
                      handleCompletion(meal.tracking_id, meal.completion);
                    }}
                    
                  /> */}
                </Grid>
              </Grid.Container>
              <EditIcon />
              <DeleteIcon
                id={meal.tracking_id}
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
