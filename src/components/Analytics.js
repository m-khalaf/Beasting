import React, { useEffect, useRef } from "react";
import MaintenanceCalculator from "./MaintenanceCalculator";
import WeightTracker from "./WeightTracker"

export default function Analytics() {
  
  return (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
  <h2 style={{ fontWeight: 'bold' }}>Analytics</h2>
  <div style={{ width: '100%', height: '20px' }}></div>
  <div style={{ fontSize: '20px', fontWeight: 'bold' }}>Maintenance Calorie Calculator</div>
  <MaintenanceCalculator />
    <WeightTracker></WeightTracker>
  </div>
  )
}
