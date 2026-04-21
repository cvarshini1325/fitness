import { useFitness } from "../context/FitnessContext";

const FitnessCard = ({ activity }) => {
  const { toggleCompleted, deleteActivity, toggleFavorite } = useFitness();

  return (
    <div
      className={`fitness-card ${activity.completed ? "completed" : ""}`}
      data-testid="activity-item"
    >
      <h1>Fitness Activity Card</h1>
      <div className="activity-header">
        <h3 data-testid="activity-name">
          {activity.name || "Untitled"} ({activity.date || "N/A"})
        </h3>

        <span className="type-tag" data-testid="activity-type">
          {activity.type || "Unknown"}
        </span>
      </div>

      <p data-testid="activity-duration">
        Duration: <strong>{activity.duration || "N/A"} minutes</strong>
      </p>

      <p data-testid="activity-calories">
        Calories Burned: <strong>{activity.calories || "N/A"}</strong>
      </p>

      <p data-testid="activity-status">
        Status: <strong>{activity.completed ? "Completed" : "Pending"}</strong>
      </p>

      <div className="activity-actions">
        <button
          data-testid="toggle-completed"
          onClick={() => toggleCompleted(activity.id)}
        >
          {activity.completed ? "Completed ✅" : "Mark Complete 🏃"}
        </button>

        <button
          data-testid="toggle-favorite"
          onClick={() => toggleFavorite(activity.id)}
        >
          {activity.favorite ? "💔" : "❤️"}
        </button>

        <button
          data-testid="delete-activity"
          onClick={() => deleteActivity(activity.id)}
          className="delete-btn"
        >
          🗑️
        </button>
      </div>
    </div>
  );
};

export default FitnessCard;