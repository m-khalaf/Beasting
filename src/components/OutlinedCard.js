import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Switch, Grid } from "@nextui-org/react";

const Complete = () => {
  return (
    <Grid.Container gap={2}>
      <Grid>
        <Switch color="success" checked={true} />
      </Grid>
    </Grid.Container>
  );
};

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  ></Box>
);

export default function OutlinedCard(props) {
  const card = props.excercises.map((excercise) => {
    return (
      <React.Fragment>
        <CardContent>
          {/* <Typography
            sx={{ fontSize: 14 }}
            color="text.secondary"
            gutterBottom
          ></Typography> */}
          <Typography variant="h5" component="div">
            {/* be{bull}nev{bull}o{bull}lent */}
            {excercise.exercise_name}
          </Typography>
          {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
            adjective
          </Typography> */}
          <Typography variant="body2">
            <br />
            {excercise.exercise_detail}
          </Typography>
        </CardContent>
        <CardActions>
          <Complete />
          {/* <Button size="small">Learn More</Button> */}
        </CardActions>
      </React.Fragment>
    );
  });

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
