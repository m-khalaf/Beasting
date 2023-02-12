import React, { useEffect, useRef } from "react";
import MaintenanceCalculator from "./MaintenanceCalculator";
import WeightTracker from "./WeightTracker"

export default function Analytics() {
  
  return <div>
    Analytics
    <MaintenanceCalculator></MaintenanceCalculator>
    <WeightTracker></WeightTracker>

    </div>;
}
