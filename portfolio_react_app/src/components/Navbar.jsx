import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container nav_bar">
      <div
        className="left nav_items"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
      Portfolio 
      </div>
      <div
        className="right nav_items"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav_items active" : "nav_items"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "nav_items active" : "nav_items"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/skills"
          className={({ isActive }) =>
            isActive ? "nav_items active" : "nav_items"
          }
        >
          Skills
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "nav_items active" : "nav_items"
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "nav_items active" : "nav_items"
          }
        >
          Contact
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
