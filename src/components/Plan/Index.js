import React, { useEffect, useRef } from "react";
import PlanCard from "./PlanCard";
import charmander from "../../resources/Charmander.png";
import Charmeleon from "../../resources/Charmeleon.png";
import charzard from "../../resources/Charzard.png";

export default function Plans() {
  return (
    <div class="d-flex justify-content-evenly d-flex align-items-center">
      <PlanCard
        title="Beginner"
        description="Beginners who want to eat healthy and exercise sometimes"
        img={charmander}
      ></PlanCard>
      <PlanCard
        title="Normal"
        description="If you have some experience eating healthy and exercising and want to improve"
        img={Charmeleon}
      ></PlanCard>
      <PlanCard
        title="Beast"
        description="If you are already advanced and want to reach the next level"
        img={charzard}
      ></PlanCard>
    </div>
  );
}
