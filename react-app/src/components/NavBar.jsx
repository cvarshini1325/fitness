import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/calories">Calories</NavLink>
      <NavLink to="/workout-time">Workout Time</NavLink>
      <NavLink to="/goal-achieved">Goals Achieved</NavLink>
      <NavLink to="/stats">Stats</NavLink>
    </nav>
  );
};

export default NavBar;