import React, { useEffect, useRef } from "react";
import PlanCard from "./PlanCard";
import charmander from "../../resources/Charmander.png";
import Charmeleon from "../../resources/Charmeleon.png";
import charzard from "../../resources/Charzard.png";
import ivysaur from "../../resources/ivysaur.png";
import machamp from "../../resources/machamp.png";
import magikarp from "../../resources/magikarp.png";


export default function Plans() {
  return (
    <div>
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
        <div class="d-flex justify-content-evenly d-flex align-items-center">
          <PlanCard
            title="Keto Diet"
            description="High-fat, moderate-protein, low-carb diet for burning fat instead of carbs."
            img={machamp}
          ></PlanCard>
          <PlanCard
            title="Vegan"
            description="Plant-based foods, including fruits, vegetables, whole grains, legumes, nuts, and seeds"
            img={ivysaur}
          ></PlanCard>
          <PlanCard
            title="Pescatarian"
            description="A plant-based diet that includes fish and other seafood, excludes beef, poultry, and pork."
            img={magikarp}
          ></PlanCard>
        </div>
    </div>
   
  );
}
