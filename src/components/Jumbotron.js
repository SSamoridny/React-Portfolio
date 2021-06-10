import React from "react";

    function Jumbotron(props) {
      return (
  
        <div id="page-container">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="jumbotron jumbotron-fluid">
                  <div className="container">
                    <h1 className="display-4">Design Your Brand. Own Your Presence.</h1>
                    <p className="lead">Samoridny Designs uses cutting edge technology and design principles to deliver amazing, responsive websites to our valued clients</p>
                  </div>
                </div>
              </div>
              
              <div className="container-fluid">
                <div className="row border">
                    <div className="list-group-item col-sm d-flex justify-content-center"><a href="https://github.com/SSamoridny">GitHub  <i className="fab fa-github icon" /></a></div>
                    <div className="list-group-item col-sm d-flex justify-content-center"><a href="https://www.linkedin.com/in/shaun-samoridny/">LinkedIn  <i className="fab fa-linkedin-in icon" /></a></div>
                    <div className="list-group-item col-sm d-flex justify-content-center"><a href="https://twitter.com/SSamoridny">Twitter  <i className="fab fa-twitter icon" /></a></div>
                    <div className="list-group-item col-sm d-flex justify-content-center"><a href="https://www.instagram.com/shaunsamdev/?hl=en">Instagram  <i className="fab fa-instagram icon" /></a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

  export default Jumbotron;