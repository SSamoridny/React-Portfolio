import React from "react";

    function Jumbotron(props) {
      return (
  
        <div id="page-container">
          <div className="container">
            <div className="row">
              <div className="col-9">
                <div className="jumbotron jumbotron-fluid">
                  <div className="container">
                    <h1 className="display-4">Design Your Brand. Own Your Presence.</h1>
                    <p className="lead">Samoridny Designs uses cutting edge technology and design principles to deliver amazing, responsive websites to our valued clients</p>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <ul className="list-group">
                  <li className="list-group-item"><a href="https://github.com/SSamoridny">GitHub<i className="fab fa-github icon" /></a></li>
                  <li className="list-group-item"><a href="https://www.linkedin.com/in/shaun-samoridny/">LinkedIn<i className="fab fa-linkedin-in icon" /></a></li>
                  <li className="list-group-item"><a href="https://twitter.com/home?lang=en">Twitter<i className="fab fa-twitter icon" /></a></li>
                  <li className="list-group-item"><a href="https://www.instagram.com/?hl=en">Instagram<i className="fab fa-instagram icon" /></a></li>
                  <li className="list-group-item"><a href="https://www.snapchat.com/">Snapchat<i className="fab fa-snapchat icon" /></a></li>
                  <li className="list-group-item"><a href="https://www.tiktok.com/en/">TikTok<i className="fab fa-tiktok icon" /></a></li>
                  <li className="list-group-item"><a href="https://www.facebook.com/">Facebook<i className="fab fa-facebook-f icon" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      );
    }

  export default Jumbotron;