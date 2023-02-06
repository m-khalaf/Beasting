import React, { useState } from "react";
import Home from "./Home";

// #efd9b4, #d6a692, #a39081, #4d6160, #292522

const Navigation = () => {
  const [showHome, setShowHome] = useState(false);
  
  const containerStyles = {
    height: "130px",
    width: "100%",
    backgroundColor: "#292522",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 50px",
    position: "relative",
  };
  
  const headerStyles = {
    color: "#efd9b4",
    fontSize: "36px",
    fontWeight: "bold",
    cursor: "pointer",
  };
  
  const userStyles = {
    color: "#efd9b4",
    fontSize: "13px",
    position: "absolute",
    bottom: "10px",
    right: "10px",
  };

  const logoutStyles = {
    color: "#efd9b4",
    fontSize: "15px",
    cursor: "pointer",
    backgroundColor: "#453e3b",
    marginLeft: "8px"
  };
  
  return (
        <div>
        <div style={containerStyles}>
        <h1 style={headerStyles} onClick={() => setShowHome(true)}>Home</h1>
        <h1 style={headerStyles} onClick={() => setShowHome(false)}>Schedule</h1>
        <h1 style={headerStyles} onClick={() => setShowHome(false)}>Pet</h1>
        <h1 style={headerStyles} onClick={() => setShowHome(false)}>Analytics</h1>
        <div style={userStyles}>Logged in as Sally
        <button style={logoutStyles}>logout</button>
        </div>
        </div>
        {showHome && <Home />}
        </div>
    );
  };
  


export default Navigation;
