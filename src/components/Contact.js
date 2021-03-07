import React from "react";
import shaun from '../assets/Profile Pic.JPG'
import resume from '../assets/Shaun Samoridny Resume.pdf'

    function Contact(props) {
      return (
  
        <div id="page-container">
          <div className="container">
            <div className="jumbotron jumbotron-fluid" id="about-me">
              <div className="container">
                <h1 className="display-6">About Me</h1>
                <img src={shaun} alt="Shaun Samoridny"/>
                <p className="lead">As a life long learner I bring a desire to create, grow and always strive for more. Not content with the status quo I decided to make a massive jump, bet on myself and become a Full Stack Web Developer. In my 30+ years in the workforce, I have cultivated great personal and professional relationships where I am always doing my best to elevate those around me. I promise I will bring that same enthusiasm and dedication to your company and become an integral part of your team.
                <br></br>
                <br></br>
                Languages: HTML, CSS, JavaScript, JQuery, MERN Stack
                Applications: Git, Heroku, React, Material UI, Bootstrap, NodeJs, MySQL, MongoDB, Express, GraphQL, Apollo</p>
    
                
              </div>
            </div>
            <h4>Contact Me</h4>
            <h4><a class="resume" href={resume} target="_blank" rel="noreferrer">Visit my Resume here</a></h4>
            <h4><a href="mailto:ssamoridny@gmail.com">ssamoridny@gmail.com</a></h4>
            <h4>(780)952-0432</h4>

          </div>
        </div>
      );
    }

    export default Contact;