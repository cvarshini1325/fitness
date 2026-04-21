const FitnessReducer = (state, action) => {
  switch (action.type) {
    case "SET_ACTIVITIES":
      return {
        ...state,
        activities: Array.isArray(action.payload) ? action.payload : [],
        loading: false,
      };

    case "ADD_ACTIVITY":
      return {
        ...state,
        activities: [...state.activities, action.payload],
      };

    case "TOGGLE_COMPLETED":
      return {
        ...state,
        activities: state.activities.map((a) =>
          a.id === action.payload && typeof a.completed === "boolean"
            ? { ...a, completed: !a.completed }
            : a,
        ),
      };

    case "TOGGLE_FAVORITE":
      return {
        ...state,
        activities: state.activities.map((a) =>
          a.id === action.payload && typeof a.favorite === "boolean"
            ? { ...a, favorite: !a.favorite }
            : a,
        ),
      };

    case "UPDATE_ACTIVITY":
      return {
        ...state,
        activities: state.activities.map((a) =>
          a.id === action.payload.id ? { ...a, ...action.payload.updates } : a,
        ),
      };

    case "SET_FAVORITES":
      return {
        ...state,
        favorites: state.activities.filter((a) => a.favorite === true),
      };

    default:
      console.warn("Unknown action:", action.type);
      return state;
  }
};

export default FitnessReducer;