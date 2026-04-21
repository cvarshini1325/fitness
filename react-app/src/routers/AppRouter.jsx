import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import FitnessStats from "../components/fitnessSats";
import Calories from "../pages/calories";
import WorkoutTime from "../pages/workoutTime";
import GoalAchieved from "../pages/goalAchieved";

const AppRouter = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calories" element={<Calories />} />
          <Route path="/workout-time" element={<WorkoutTime />} />
          <Route path="/goal-achieved" element={<GoalAchieved />} />
          <Route path="/stats" element={<FitnessStats />} />

          {/* Optional but important for CA2 pattern */}
          <Route path="/activities/:id" element={<Home />} />

          {/* Fallback */}
          <Route path="*" element={<h2>Page Not Found</h2>} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default AppRouter;