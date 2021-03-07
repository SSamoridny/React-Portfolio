import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (

    
        <nav class="navName" className="navbar navbar-expand-lg" style={{backgroundColor: "midnightblue", fontWeight: "bold", letterSpacing: ".03rem"}}>
          <NavLink className="navbar-brand" to="/React-Portfolio/">
            Shaun Samoridny Design
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
          <span className="navbar-toggler-icon"><i class="fas fa-bars"></i></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/React-Portfolio/Portfolio">
                  Portfolio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/React-Portfolio/About">
                  About
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
  );
}
