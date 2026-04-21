import React from "react";

import FitnessList from "../components/fitnessList";
import FitnessForm from "./goalAchieved";

const WorkoutTime = () => (
  <div className="app-container" data-testid="workout-time-page">
    <h1 className="main-title" data-testid="app-title">
      ⏱️ Workout Time Tracker
    </h1>
    <FitnessForm />
    <FitnessList />
  </div>
);

export default WorkoutTime;