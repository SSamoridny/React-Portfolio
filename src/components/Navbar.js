import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (

    
        <nav class="navName" className="navbar navbar-expand-lg border" style={{backgroundColor: "white", fontWeight: "bold", letterSpacing: ".02rem"}}>
          <NavLink className="navbar-brand" to="/React-Portfolio/">
            SHAUN SAMORIDNY
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
                  PORTFOLIO
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/React-Portfolio/About">
                  ABOUT
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
  );
}
