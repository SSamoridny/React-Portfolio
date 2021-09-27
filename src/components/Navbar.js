import React from "react";
// import { Link,NavLink } from "react-router-dom";
import {Link} from 'react-scroll'

export default function Navbar() {
  return (

    
        <nav class="navName" className="navbar navbar-expand-lg border" style={{backgroundColor: "white", fontWeight: "bold", letterSpacing: ".02rem"}}>
          
            SHAUN SAMORIDNY
          
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
                  <Link to="portfolio" spy={true} smooth={true}>PORTFOLIO</Link>
                </li>
                <li className="nav-item">
                  <Link to="about" spy={true} smooth={true}>ABOUT</Link>
                </li>
             
            </ul>
          </div>
        </nav>
  );
}

 // <nav class="navbar navbar-light bg-light fixed-top">
    //     <div class="container-fluid">
    //         <span class="navbar-brand">DEAD DEVIL SOCIETY</span>
    //         <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
    //         <span class="navbar-toggler-icon"></span>
    //         </button>
    //         <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
    //         <div class="offcanvas-header">
    //             <h5 class="offcanvas-title" id="offcanvasNavbarLabel">DEAD DEVIL SOCIETY</h5>
    //             <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    //         </div>
    //         <div class="offcanvas-body">
    //             <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
    //             <li class="nav-item">
    //                 <Link className="nav-link active" aria-current="page" to="learn-section">LEARN</Link>
    //             </li>
    //             <li class="nav-item">
    //                 <Link className="nav-link active" aria-current="page" to="rarity-section">RARITY</Link>
    //             </li>
    //             <li class="nav-item">
    //                 <Link className="nav-link active" aria-current="page" to="faq-section">FAQ</Link>
    //             </li>
    //             <li class="nav-item">
    //                 <Link className="nav-link active" aria-current="page" to="roadmap-section">ROADMAP</Link>
    //             </li>
                
                
    //             </ul>
    //         </div>
    //         </div>
    //     </div>
    // </nav>
