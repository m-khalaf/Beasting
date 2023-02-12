import React, { useEffect, useRef } from "react";
import charmander from "../../resources/Charmander.png";

export default function Plan({ title, description, img }) {
  return (
    <div class="d-flex justify-content-evenly d-flex align-items-center">
      <div className="card" style={{ height: "70vh", width: "50vh" }}>
        <img
          src={img}
          className="card-img-top"
          alt="Card image cap"
          style={{ height: "50vh", width: "49.5vh" }}
        />
        <div className="card-body" style={{ height: "20vh", width: "50vh" }}>
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href="#" class="btn btn-primary">
            Select Plan
          </a>
        </div>
      </div>
    </div>
  );
}
