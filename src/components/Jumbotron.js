import React from "react";
import hashnode from '../assets/brand-icon.png'

    function Jumbotron(props) {
      return (
  
        <div id="page-container">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="jumbotron jumbotron-fluid">
                  <div className="container">
                    <h1 className="display-4">Hi, I'm Shaun!</h1>
                    <p className="lead">I am a Full Stack Developer with a main focus on Front End work. In 2017 I began my journey to become a web developer as a way of showing more value to my long term employer. With a few small projects under my belt I knew that this was something that I needed to do full time. After enrolling in the University of Toronto SCS Full Stack Development Boot Camp, I am now able to show nearly 30 projects ranging from my personal brand and company, to NFT projects, to various school projects that tested and broadened my knowledge base. All of this comes with a promise to become an integral part of any team where I will take on whatever roles are necessary for team and project success.</p>
                  </div>
                </div>
              </div>
              
              <div className="container-fluid">
                <div className="row border">
                    <div className="list-group-item col-sm d-flex justify-content-center"><a href="https://github.com/SSamoridny" target="_blank" rel="noreferrer">GitHub  <i className="fab fa-github icon" /></a></div>
                    <div className="list-group-item col-sm d-flex justify-content-center"><a href="https://www.linkedin.com/in/shaun-samoridny/" target="_blank" rel="noreferrer">LinkedIn  <i className="fab fa-linkedin-in icon linked" /></a></div>
                    <div className="list-group-item col-sm d-flex justify-content-center"><a href="https://twitter.com/SamoFamCreative" target="_blank" rel="noreferrer">Twitter  <i className="fab fa-twitter icon"/></a></div>
                    <div className="list-group-item col-sm d-flex justify-content-center" ><a href="https://hashnode.com/@SamoFamCreative" target="_blank" rel="noreferrer">Hashnode <img className="hash" src={hashnode} alt=""/></a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

  export default Jumbotron;