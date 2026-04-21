import React from "react";
import { useFitness } from "../context/FitnessContext";
import FitnessCard from "../components/fitnessCard";

const Calories = () => {
  const { activities } = useFitness();

  const sortedActivities = [...activities].sort((a, b) => (b.calories || 0) - (a.calories || 0));

  return (
    <div className="app-container" data-testid="calories-page">
      <h1 className="main-title" data-testid="calories-title">
        Activities by Calories
      </h1>

      <div className="user-list" data-testid="calories-list">
        {sortedActivities.length === 0 ? (
          <p data-testid="no-activities">No activities</p>
        ) : (
          sortedActivities.map((activity) => <FitnessCard key={activity.id} activity={activity} />)
        )}
      </div>
    </div>
  );
};

export default Calories;