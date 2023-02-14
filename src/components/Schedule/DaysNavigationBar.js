import React from "react";
import { Tabs, Tab } from "@mui/material";

function DaysNavigationBar(props) {
  const [value, setValue] = React.useState(props.day);

  const handleChange = (event,newValue) => {
    props.onChange(newValue);
    setValue(newValue);
    console.log('+++++++++ ', newValue)
  };
  const day = props.unixDayArry.map((day) => {
    let date = new Date(day * 1000);
    let options = { weekday: "long", month: "numeric", day: "numeric" };
    return (
      <Tab label={date.toLocaleDateString("en-US", options)} value={day} />
    );
  });

  return (
    <div style={{ height: "50px", width: "100%" }}>
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
