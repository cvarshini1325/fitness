import { createContext, useContext, useReducer, useEffect } from "react";
import FitnessReducer from "../reducer/FitnessReducer";
import axios from "axios";
import { getToken, getDataset } from "../api/api";

const initialState = {
  activities: [],
  favorites: [],
  loading: true,
};

export const FitnessContext = createContext();

export const FitnessProvider = ({ children }) => {
  const [state, dispatch] = useReducer(FitnessReducer, initialState);

  // Fetch activities from server
  useEffect(() => {
    const fetchActivities = async () => {
      try {
        // Step 1: Get Token
        const tokenRes = await getToken(
          "516422"
        );

        // Step 2: Fetch dataset
        const activities = await getDataset(tokenRes.token, tokenRes.dataUrl);

        dispatch({ type: "SET_ACTIVITIES", payload: activities });
      } catch (err) {
        console.error("Error fetching data:", err.message);
      }
    };

    fetchActivities();
  }, []);

  // Sync favorites automatically
  useEffect(() => {
    dispatch({ type: "SET_FAVORITES" });
  }, [state.activities]);

  const addActivity = (activity) => dispatch({ type: "ADD_ACTIVITY", payload: activity });

  const toggleCompleted = (id) =>
    dispatch({ type: "TOGGLE_COMPLETED", payload: id });

  const deleteActivity = (id) => dispatch({ type: "DELETE_ACTIVITY", payload: id });

  const updateActivity = (id, updates) => dispatch({ type: "UPDATE_ACTIVITY", payload: { id, updates } });

  const toggleFavorite = (id) =>
    dispatch({ type: "TOGGLE_FAVORITE", payload: id });

  return (
    <FitnessContext.Provider
      value={{
        activities: state.activities,
        favorites: state.favorites,
        loading: state.loading,
        addActivity,
        toggleCompleted,
        deleteActivity,
        updateActivity,
        toggleFavorite,
      }}
    >
      {children}
    </FitnessContext.Provider>
  );
};

export const useFitness = () => useContext(FitnessContext);