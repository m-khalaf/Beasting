import React from "react";
import { Tabs, Tab } from "@mui/material";
import { dayFromValue } from "../helpers/selectors";

function DaysNavigationBar(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    console.log("newvale", newValue);
    props.onChange(newValue);
    setValue(newValue);
  };
  const day = props.unixDayArry.map((day) => {
    let date = new Date(day * 1000);
    let options = { weekday: "long", month: "numeric", day: "numeric" };
    return (
      <Tab label={date.toLocaleDateString("en-US", options)} value={day} />
    );
  });

  return (
    <div style={{ height: "50px", width: "70%" }}>
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
