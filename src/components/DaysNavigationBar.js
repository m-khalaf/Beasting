import React from "react";
import { Tabs, Tab } from "@mui/material";
import OutlinedCard from "./OutlinedCard";
import { dayFromValue } from "../helpers/selectors";

function DaysNavigationBar(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    const whichDay = dayFromValue(newValue);
    props.onChange(whichDay);
    setValue(newValue);
  };
  const day = props.daysArray.map((day) => {
    return <Tab label={day.name} />;
  });

  return (
    <div>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        {day}
      </Tabs>
      <OutlinedCard excercises={props.excercises} />
    </div>
  );
}

export default DaysNavigationBar;
