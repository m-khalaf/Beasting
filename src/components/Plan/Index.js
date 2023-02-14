import React, {useState, useEffect, useRef } from "react";
import PlanCard from "./PlanCard";
import charmander from "../../resources/Charmander.png";
import Charmeleon from "../../resources/Charmeleon.png";
import charzard from "../../resources/Charzard.png";
import ivysaur from "../../resources/ivysaur.png";
import machamp from "../../resources/machamp.png";
import magikarp from "../../resources/magikarp.png";
import { ketoMealPlan, pescatarianMealPlan, veganMealPlan, beginnerWorkoutPlan, intermediateWorkoutPlan, expertWorkoutPlan } from "../../helpers/planObjects";
import axios from "axios";
export default function Plans(props) {
  const [refresh, setRefresh] = useState(0)

  useEffect(() => {

  }, [refresh])

  const saveMealPlan = (meal) => {
    if (meal !== undefined) {
      axios
        .post(`http://localhost:8000/home/save-meal-plan/`, {
          plan: meal,
          day: props.day,
        })
        .then((res) => {
          console.log("Completion status updated successfully", res.data);
          setRefresh(refresh + 1);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  const saveExerPlan = (exer) => {
    if (exer !== undefined) {
      axios
        .post(`http://localhost:8000/home/save-exer-plan/`, {
          plan: exer,
          day: props.day,
        })
        .then((res) => {
          console.log("Completion status updated successfully", res.data);
          setRefresh(refresh + 1);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };
  return (
    <div>
       <div class="d-flex justify-content-evenly d-flex align-items-center">
          <PlanCard
            title="Beginner Exercise Plan"
            // description=""
            img={charmander}
            day={props.day}
            savePlan={() => {
              saveExerPlan(beginnerWorkoutPlan)
            }}
          ></PlanCard>
          <PlanCard
            title="Intermediate Exercise Plan"
            // description=""
            img={Charmeleon}
            day={props.day}
            savePlan={() => {
              saveExerPlan(intermediateWorkoutPlan)
            }}
          ></PlanCard>
          <PlanCard
            title="Expert Exercise Plan"
            // description=""
            img={charzard}
            day={props.day}
            savePlan={() => {
              saveExerPlan(expertWorkoutPlan)
            }}
          ></PlanCard>
        </div>
        <div class="d-flex justify-content-evenly d-flex align-items-center">
          <PlanCard
            title="Ketogenic Diet"
            // description="High-fat, moderate-protein, low-carb diet for burning fat instead of carbs."
            img={machamp}
            day={props.day}
            savePlan={() => {
              saveMealPlan(ketoMealPlan);
            }}
          ></PlanCard>
          <PlanCard
            title="Vegan Diet"
            // description="Plant-based foods, including fruits, vegetables, whole grains, legumes, nuts, and seeds"
            img={ivysaur}
            day={props.day}
            savePlan={() => {
              saveMealPlan(veganMealPlan);
            }}
          ></PlanCard>
          <PlanCard
            title="Pescatarian Diet"
            // description="A plant-based diet that includes fish and other seafood, excludes beef, poultry, and pork."
            img={magikarp}
            day={props.day}
            savePlan={() => {
              saveMealPlan(pescatarianMealPlan);
            }}
          ></PlanCard>
        </div>
    </div>
   
  );
}
