import React from "react";
import Card from '../components/Card'
import flame from '../assets/Flame Game.png'
import espn from '../assets/Not ESPN.png'
import quiz from '../assets/Quiz Game.png'
import planner from '../assets/Day Planner.png'
import weather from '../assets/Weather Dashboard.png'

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
            description="Not ESPN was designed for the sports fanatic allowing you to search your favourite athletes and teams"
          />
        </div>
        <div className="col">
          <Card
            name="JavaScript Quiz"
            projectname="JavaScript Quiz"
            titlecolor="midnightblue"
            cardimg={quiz}
            projectlink="https://ssamoridny.github.io/JavaScript-Quiz-Game/"
            description="New to JavaScript? Give our quiz a try! Beat the clock and store your high scores but be careful, get a question wrong and time will disappear!"
          />
        </div>
        <div className="col">
          <Card
            name="Day Planner"
            projectname="Day Planner"
            titlecolor="midnightblue"
            cardimg={planner}
            projectlink="https://ssamoridny.github.io/Workday-Planner/"
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
            description="Wondering what to wear today? The Weather Dashboard lets you have current temperatures and a 5 day forecast"
          />
        </div>
        <div className="col">
          <Card
            name="Placeholder"
            projectname="Placeholder"
            titlecolor="midnightblue"
            cardimg="https://upload.wikimedia.org/wikipedia/commons/6/6b/Taka_Shiba.jpg"
            projectlink=""
            description=""
          />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;