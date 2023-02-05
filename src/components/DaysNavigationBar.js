import React from "react";
import { Tabs, Tab } from "@mui/material";
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
    <div style={{ height: "50px" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        {day}
      </Tabs>
    </div>
  );
}

export default DaysNavigationBar;
