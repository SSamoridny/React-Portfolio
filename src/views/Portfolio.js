import React from "react";
import Card from '../components/Card'
import flame from '../assets/Flame Game.png'
import espn from '../assets/Not ESPN.png'
import budget from '../assets/Budget Tracker.png'
import planner from '../assets/Day Planner.png'
import weather from '../assets/Weather Dashboard.png'
import workout from '../assets/Workout Tracker.png'

function Portfolio(props) {
  return (
    <div>
      <h1>FEATURED WORK</h1>
      <div className="row">
        <div className="col">
        
          <Card
            name="Flame Game"
            projectname="Flame Game"
            titlecolor="midnightblue"
            cardimg={flame}
            projectlink="https://tranquil-temple-78360.herokuapp.com/"
            githublink="https://github.com/SSamoridny/Project-2-Flame-Game"
            description="An Apothecary of Hilarity, Flame Game is a fully functioning online store templete here to help you launch the business of your dreams"
          />
        </div>
        <div className="col">
          <Card
            name="Not ESPN"
            projectname="Not ESPN"
            titlecolor="midnightblue"
            cardimg={espn}
            projectlink="https://npcoding25.github.io/Project-1/"
            githublink="https://github.com/npcoding25/Project-1"
            description="Not ESPN was designed for the sports fanatic allowing you to search your favourite athletes and teams in both soccer and basketball"
          />
        </div>
        <div className="col">
          <Card
            name="Budget Tracker"
            projectname="Budget Tracker"
            titlecolor="midnightblue"
            cardimg={budget}
            projectlink="https://cryptic-brook-73198.herokuapp.com/"
            githublink="https://github.com/SSamoridny/PWA-Budget-Tracker"
            description="Easy come, easy go... it doesn't have to be. Tired of wondering why your bank account is empty? Try the Budget Tracker"
          />
        </div>
        <div className="col">
          <Card
            name="Day Planner"
            projectname="Day Planner"
            titlecolor="midnightblue"
            cardimg={planner}
            projectlink="https://ssamoridny.github.io/Workday-Planner/"
            githublink="https://github.com/SSamoridny/Workday-Planner"
            description="In this busy world we could all use a hand with time management! Use this stylish and handy daily planner to stay on track!"
          />
        </div>
        <div className="col">
          <Card
            name="Weather Dashboard"
            projectname="Weather Dashboard"
            titlecolor="midnightblue"
            cardimg={weather}
            projectlink="https://ssamoridny.github.io/Weather-Dashboard-Homework-6/"
            githublink="https://github.com/SSamoridny/Weather-Dashboard-Homework-6"
            description="Wondering what to wear today? The Weather Dashboard lets you have current temperatures and a 5 day forecast"
          />
        </div>
        <div className="col">
          <Card
            name="Workout Tracker"
            projectname="Workout Tracker"
            titlecolor="midnightblue"
            cardimg={workout}
            projectlink="https://fathomless-headland-20645.herokuapp.com/"
            githublink="https://github.com/SSamoridny/NoSQL-Workout-Tracker"
            description="Working out is hard enough. Sometimes you can't even stand let alone remember what you did last time. Wonder no more with the Workout Tracker!"
          />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;