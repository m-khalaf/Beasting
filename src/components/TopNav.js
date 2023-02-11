import React, { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
// #efd9b4, #d6a692, #a39081, #4d6160, #292522
import Home from "./Home";
import Progress from "./Progress";
import Analytics from "./Analytics";
import DayListItem from "./DayListItem";
export default function Navigation() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          BEAST
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link" href="/home">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/schedule">
                Schedule
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/progress">
                Progress
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/analytics">
                Analytics
              </a>
            </li>
          </ul>
        </div>
        <span>Logged-in as Sally </span>

        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
          Logout
        </button>
      </nav>
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/progress" element={<Progress />} />
        <Route exact path="/analytics" element={<Analytics />} />
      </Routes>
    </div>
  );
}
