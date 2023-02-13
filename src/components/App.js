import TopNav from "./TopNav";
import React, { useState, useEffect } from "react";
import { Route, Routes, Link } from "react-router-dom";
// #efd9b4, #d6a692, #a39081, #4d6160, #292522
import Home from "./Home";
import Progress from "./Progress";
import Analytics from "./Analytics";
import Schedule from "./Schedule/Schedule";
import Plans from "./Plan/Index";

export default function App() {
  const init = 1675062129;
  const [unixDay, setUnixDay] = useState(init)
  
  return (
    <div>
      <TopNav></TopNav>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/progress" element={<Progress  />} />
        <Route exact path="/schedule" element={<Schedule setUnixDay={setUnixDay} init={init}/>} />
        <Route exact path="/analytics" element={<Analytics />} />
        <Route exact path="/plan" element={<Plans day={unixDay}/>} />
      </Routes>
    </div>
  );
}
