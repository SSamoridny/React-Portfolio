import React from "react";
import Card from '../components/Card'
import flame from '../assets/Flame Game.png'
import personal from '../assets/Personal.png'
import keys from '../assets/Keys.png'
import drastic from '../assets/Drastic Measurements.png'
import weather from '../assets/Weather Dashboard.png'
import workout from '../assets/Workout Tracker.png'


function Portfolio(props) {
  return (
    <div>
      <h1 id='portfolio' style={{fontSize: "1.5rem", fontWeight: "bold"}}>FEATURED WORK</h1>
        <div className="container-fluid">
        <div className="row">
          
          <div className="col-md-6 mb-4">
            <Card
              name="Flame Game"
              projectname="Flame Game"
              titlecolor="midnightblue"
              cardimg={flame}
              projectlink="https://tranquil-temple-78360.herokuapp.com/"
              githublink="https://github.com/SSamoridny/Project-2-Flame-Game"
              description="An Apothecary of Hilarity, Flame Game is a fully functioning online store templete. Shop, add, remove from cart, and checkout. It is all here to help you get started."
              description2="Created With: HTML, CSS, JavsScript, Bootstrap, MySQL, Node.JS, and Express"
            />
          </div>

          <div className="col-md-6 mb-4">
            <Card
              name="SamoFam Creative"
              projectname="SamoFam Creative"
              titlecolor="midnightblue"
              cardimg={personal}
              projectlink="https://www.samofamcreative.com"
              githublink="https://github.com/SSamoridny/BusinessPortfolio"
              description="With a desire to create and build on a freelance level, I have created a website to promote my own brand and business. Welcome to SamoFam Creatve Media"
              description2="Created With: HTML, CSS, JavsScript while using SEO strategies to broaden my reach."
            />
          </div>

          <div className="col-md-6 mb-4">
            <Card
              name="K3YS NFT Website"
              projectname="K3YS"
              titlecolor="midnightblue"
              cardimg={keys}
              projectlink="https://k3ys.netlify.app/"
              githublink="https://github.com/SSamoridny/K3YS"
              description="In my first B2B project I was able to work with the business director of K3YS to create their site. Using best practice styles and designs, I was able to create the project to their specifications, straight to the point, and make it about the art."
              description2="Created With: HTML, CSS"
            />
          </div>

          <div className="col-md-6 mb-4">
            <Card
              name="Drastic Measurements"
              projectname="Drastic Measurements"
              titlecolor="midnightblue"
              cardimg={drastic}
              projectlink="https://vast-taiga-98028.herokuapp.com/"
              githublink="https://github.com/SSamoridny/Dashboard"
              description="Created for a real world production company, Drastic Measurements is an app designed for costume measurements for Broadway productions."
              description2="Created With: HTML, CSS, JavsScript, Bootstrap, MongoDB, Node.JS, and Express"
            />
          </div>

          <div className="col-md-6 mb-4">
            <Card
              name="Weather Dashboard"
              projectname="Weather Dashboard"
              titlecolor="midnightblue"
              cardimg={weather}
              projectlink="https://ssamoridny.github.io/Weather-Dashboard-Homework-6/"
              githublink="https://github.com/SSamoridny/Weather-Dashboard-Homework-6"
              description="Not sure what to pack on your vacation? Check the 5 day forecast on the Weather Dashboard. Using weather APIs to power this JavaScript app, I was able to bring you a fully functional app with local storage to keep your weather needs on hand."
              description2="Created With: HTML, CSS, JavsScript"
            />
          </div>

          <div className="col-md-6 mb-4">
            <Card
              name="Workout Tracker"
              projectname="Workout Tracker"
              titlecolor="midnightblue"
              cardimg={workout}
              projectlink="https://fathomless-headland-20645.herokuapp.com/"
              githublink="https://github.com/SSamoridny/NoSQL-Workout-Tracker"
              description="Working out is hard enough. Sometimes you can't even stand let alone remember what you did last time. Wonder no more with the Workout Tracker!"
              description2="Created With: HTML, CSS, JavsScript, Bootstrap, MongoDB, Node.JS, and Express"
            />
          </div>

        </div>
      </div>
    </div>
  );
}

export default Portfolio;