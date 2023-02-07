import React, { useState } from "react";
import Home from "./Home";
import "./TopNav.css";
import Button from "@mui/material/Button";

// #efd9b4, #d6a692, #a39081, #4d6160, #292522

const Navigation = () => {
  const [showHome, setShowHome] = useState(false);

  const logoutStyles = {
    // color: "#efd9b4",
    // fontSize: "15px",
    // cursor: "pointer",
    // backgroundColor: "#453e3b",
    // marginLeft: "8px",
  };

  return (
    <div>
      <div className="containerStyles">
        <h1 className="headerStyles" onClick={() => setShowHome(true)}>
          Home
        </h1>
        <h1 className="headerStyles" onClick={() => setShowHome(false)}>
          Schedule
        </h1>
        <h1 className="headerStyles" onClick={() => setShowHome(false)}>
          Pet
        </h1>
        <h1 className="headerStyles" onClick={() => setShowHome(false)}>
          Analytics
        </h1>
        <span className="userStyles">
          Logged in as Sally&nbsp;
          <Button
            variant="contained"
            color="secondary"
            size="small"
            style={{
              backgroundColor: "#efd9b4",
              color: "#3c3b3f",
              fontWeight: 500,
            }}
          >
            Logout
          </Button>{" "}
        </span>
      </div>
      {showHome && <Home />}
    </div>
  );
};

export default Navigation;
