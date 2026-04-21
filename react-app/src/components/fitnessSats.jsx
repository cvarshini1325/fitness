import React, { useEffect } from "react";
import { useFitness } from "../context/FitnessContext";

const FitnessStats = () => {
  const { activities } = useFitness();

  const total = activities.length;

  const completedCount = activities.filter((a) => a.completed === true).length;

  const favoriteCount = activities.filter((a) => a.favorite === true).length;

  const typeCount = activities.reduce((acc, activity) => {
    if (!activity.type) return acc;
    acc[activity.type] = (acc[activity.type] || 0) + 1;
    return acc;
  }, {});

  useEffect(() => {
    window.appState = {
      totalActivities: total,
      completedActivities: completedCount,
      favoriteActivities: favoriteCount,
    };
  }, [activities]);

  if (!activities.length)
    return <h3 data-testid="no-stats">No activities available</h3>;

  return (
    <div className="activity-stats fade-in" data-testid="stats-page">
      <h2>Fitness Stats</h2>

      <p data-testid="total-activities">Total Activities: {total}</p>
      <p data-testid="completed-activities">Completed: {completedCount}</p>
      <p data-testid="favorite-activities">Favorite: {favoriteCount}</p>

      <div>
        <p>Activity Types:</p>
        <ul data-testid="type-list">
          {Object.entries(typeCount).map(([type, count]) => (
            <li key={type}>
              {type}: {count}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FitnessStats;