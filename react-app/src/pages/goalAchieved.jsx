import React from "react";
import { useFitness } from "../context/FitnessContext";
import FitnessCard from "../components/fitnessCard";

const GoalAchieved = () => {
  const { activities } = useFitness();

  const completedActivities = activities.filter((activity) => activity.completed === true);

  return (
    <div className="app-container" data-testid="goal-achieved-page">
      <h1 className="main-title" data-testid="goal-achieved-title">
        🎉 Goals Achieved
      </h1>

      <div className="user-list" data-testid="completed-list">
        {completedActivities.length === 0 ? (
          <p data-testid="no-completed">No completed activities yet</p>
        ) : (
          completedActivities.map((activity) => <FitnessCard key={activity.id} activity={activity} />)
        )}
      </div>
    </div>
  );
};

export default GoalAchieved;