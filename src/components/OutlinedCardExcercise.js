import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Switch, Grid } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit, faPlus } from "@fortawesome/free-solid-svg-icons";
import "../styles/OutlinedCard.css";

const EditIcon = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faEdit} className="fa-edit" />
    </div>
  );
};

const DeleteIcon = () => (
  <div>
    <FontAwesomeIcon icon={faTrashAlt} className="fa-trash-alt" />
  </div>
);

export default function OutlinedCard(props) {
  const card = props.excercises.map((excercise) => {
    return (
      <React.Fragment className="card-container">
        <CardContent className="card card-content">
          <Typography variant="h5" component="div" className="exercise-name">
            {excercise.exercise_name}
          </Typography>

          <Typography variant="body2">
            {excercise.exercise_detail}
            <CardActions className="card-actions">
              <Grid.Container>
                <Grid>
                  <Switch color="success" checked={excercise.completion} />
                </Grid>
              </Grid.Container>
              <EditIcon />
              <DeleteIcon />
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