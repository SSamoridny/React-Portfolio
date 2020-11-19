import React from "react";

    function Contact(props) {
      return (
  
        <div id="page-container">
          <div className="container">
            <div className="jumbotron jumbotron-fluid" id="about-me">
              <div className="container">
                <h1 className="display-6">About Me</h1>
                <img src="/Profile Pic.JPG" alt="Shaun Samoridny"/>
                <p className="lead">As a life long learner I bring a desire to create, grow and always strive for more. Not content with the status quo I decided to make a massive jump, bet on myself and become a Full Stack Web Developer. In my 30+ years in the workforce, I have cultivated great personal and professional relationships where I am always doing my best to elevate those around me. I promise I will bring that same enthusiasm and dedication to your company and become an integral part of your team.</p>
                <a href="/Shaun Samoridny Resume.pdf">Visit my Resume here</a>
              </div>
            </div>
            <h4>Contact Us</h4>
            <form>
              <div className="form-group row">
                <label htmlFor="colFormLabel" className="col-sm-2 col-form-label col-form-label-md">Name</label>
                <div className="col-sm-10">
                  <input type="email" className="form-control form-control-sm" id="colFormLabelSm" placeholder="Full Name" />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="colFormLabel" className="col-sm-2 col-form-label-md">Email</label>
                <div className="col-sm-10">
                  <input type="email" className="form-control form-control-sm" id="colFormLabel" placeholder="Example : samoridnydesign@gmail.com" />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="colFormLabelLg" className="col-sm-2 col-form-label col-form-label-md">Message</label>
                <div className="col-sm-10 message">
                  <input type="email" className="form-control form-control-md" id="colFormLabelMd" placeholder="Tell us about yourself" />
                </div>
              </div>
            </form>
          </div>
        </div>
      );
    }

    export default Contact;