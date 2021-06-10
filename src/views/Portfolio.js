import React from "react";
import Card from '../components/Card'
import flame from '../assets/Flame Game.png'
import personal from '../assets/Personal.png'
import keys from '../assets/Keys.png'
import planner from '../assets/Day Planner.png'
import weather from '../assets/Weather Dashboard.png'
import workout from '../assets/Workout Tracker.png'

function Portfolio(props) {
  return (
    <div>
      <h1>FEATURED WORK</h1>
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
              name="Workout Tracker"
              projectname="Workout Tracker"
              titlecolor="midnightblue"
              cardimg={keys}
              projectlink="https://fathomless-headland-20645.herokuapp.com/"
              githublink="https://github.com/SSamoridny/NoSQL-Workout-Tracker"
              description="Working out is hard enough. Sometimes you can't even stand let alone remember what you did last time. Wonder no more with the Workout Tracker!"
              description2="Created With: HTML, CSS, JavsScript, Bootstrap, MongoDB, Node.JS, and Express"
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