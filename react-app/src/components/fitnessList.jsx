import { useFitness } from "../context/FitnessContext";

import FitnessCard from "./fitnessCard";

const FitnessList = () => {
  const { activities, loading } = useFitness();

  if (loading) {
    return <p data-testid="loading">Loading activities...</p>;
  }

  if (activities.length === 0) {
    return (
      <p className="no-activities" data-testid="no-activities">
        No activities available
      </p>
    );
  }

  return (
    <div className="activity-list" data-testid="activity-list">
      {activities.map((activity) => (
        <FitnessCard key={activity.id} activity={activity} />
      ))}
    </div>
  );
};

export default FitnessList;