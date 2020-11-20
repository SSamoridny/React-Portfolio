import React from "react";

    function Footer(props) {
      return (
  
        <footer>
          <nav className="nav" style={style}>
            <a className="nav-link" href="index.html">Home</a>
            <a className="nav-link" href="portfolio.html">Portfolio</a>
            <a className="nav-link" href="contact.html">Contact</a>
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