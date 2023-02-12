import React from "react";
import bench from "../../resources/bench.gif";
import clean from "../../resources/clean.gif";
import press from "../../resources/press.gif";
import exer from "../../resources/exer.gif";
import squat from "../../resources/squat.gif";
import stretch from "../../resources/stretch.gif";

import burger from "../../resources/burger.gif";
import cook from "../../resources/cook.gif";
import fry from "../../resources/fry.gif";
import ramen from "../../resources/ramen.gif";
import egg from "../../resources/egg.gif";
import dumpling from "../../resources/dumpling.gif";

export default function Gifbar(props) {
  if (props.gif === "exer") {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          margin: "0",
          padding: "0",
        }}
      >
        <div style={{ width: "200px", height: "100px", overflow: "hidden" }}>
          <img
            src={bench}
            alt="My GIF"
            style={{
              width: "100%",
              height: "100%",
              transform: "translateX(10%)",
            }}
          />
        </div>
        <div style={{ width: "200px", height: "100px", overflow: "hidden" }}>
          <img
            src={clean}
            alt="My GIF"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div style={{ width: "160px", height: "100px", overflow: "hidden" }}>
          <img
            src={press}
            alt="My GIF"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div style={{ width: "160px", height: "100px", overflow: "hidden" }}>
          <img
            src={exer}
            alt="My GIF"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div style={{ width: "120px", height: "100px", overflow: "hidden" }}>
          <img
            src={squat}
            alt="My GIF"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div style={{ width: "160px", height: "100px", overflow: "hidden" }}>
          <img
            src={stretch}
            alt="My GIF"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          margin: "0",
          padding: "0",
        }}
      >
        <div style={{ width: "200px", height: "100px", overflow: "hidden" }}>
          <img
            src={cook}
            alt="My GIF"
            style={{
              width: "100%",
              height: "100%",
              transform: "translateX(10%)",
            }}
          />
        </div>
        <div style={{ width: "200px", height: "100px", overflow: "hidden" }}>
          <img
            src={egg}
            alt="My GIF"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div style={{ width: "160px", height: "100px", overflow: "hidden" }}>
          <img
            src={fry}
            alt="My GIF"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div style={{ width: "160px", height: "100px", overflow: "hidden" }}>
          <img
            src={ramen}
            alt="My GIF"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div style={{ width: "120px", height: "100px", overflow: "hidden" }}>
          <img
            src={burger}
            alt="My GIF"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div style={{ width: "160px", height: "100px", overflow: "hidden" }}>
          <img
            src={dumpling}
            alt="My GIF"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
    );
  }
}
