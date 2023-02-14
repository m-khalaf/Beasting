import React, { useEffect, useRef } from "react";
import charmander from "../../resources/Charmander.png";
import "./PlanCard.scss";

export default function Plan({ title, description, img, savePlan }) {
  let classString = "d-flex justify-content-evenly d-flex align-items-center " + title;
  return (
    <div class={classString} id={title} >
      <div className="card" style={{ height: "70vh", width: "50vh" }} >
        <img
          src={img}
          className="card-img-top"
          alt="Card image cap"
          style={{ height: "50vh", width: "49.5vh" }}
        />
        <div className="card-body" style={{ height: "40%", width: "100%", display: "flex", flexDirection: "column", alignItems: "center", alignContent: "center", alignSelf: "center" }}>
          <h5 className="card-title third-space" style={{ height: "25%" }}>{title}</h5>
          {/* <p className="card-text third-space" style={{ height: "30%", marginBottom: '3%' }}>{description}</p> */}
          <a href="#" onClick={savePlan} id={title} className="btn btn-primary third-space" style={{ height: "37px" }} onMouseEnter={(e) => { e.target.style.backgroundColor = "red"; e.target.transform = "scale(0.95)"; }} onMouseLeave={(e) => { e.target.style.size = "1"; e.target.style.backgroundColor = "#0d6efd"}}>
            Select Plan
          </a>
        </div>
      </div>
    </div>
  );
}
