import React from "react";
import { NavLink } from "react-router-dom";

    function Footer(props) {
      return (
  
        <footer>
          <nav className="nav" style={style}>
            <NavLink className="nav-link" to="/React-Portfolio/">Home</NavLink>
            <NavLink className="nav-link" to="/React-Portfolio/Portfolio">Portfolio</NavLink>
            <NavLink className="nav-link" to="/React-Portfolio/About">About</NavLink>
          </nav>
        </footer>
      );
    }

    var style = {
        backgroundColor: "midnightblue",
        borderTop: "1px solid #E7E7E7",
        padding: "20px",
        position: "fixed",
        left: "0",
        bottom: "0",
        height: "60px",
        width: "100%",
    };

export default Footer;