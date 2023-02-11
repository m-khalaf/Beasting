import React, { useState } from "react";
import logo from "../resources/logo.png";

export default function Navigation() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div style={{ width: '106px', height: '60px', overflow: 'hidden' }}>
            <img src={logo} alt="My GIF" style={{ width: '100%', height: '100%', transform: 'translateX(10%)' }} />
        </div>
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
              <a class="nav-link" href="/plan">
                Plan
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">
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
    </div>
  );
}
