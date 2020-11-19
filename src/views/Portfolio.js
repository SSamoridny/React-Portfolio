import React, {useState, useEffect} from "react";
import Card from '../components/Card'

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
            cardimg="/Flame Game.png"
          />
        </div>
        <div className="col">
          <Card
            name="Not ESPN"
            projectname="Not ESPN"
            titlecolor="midnightblue"
            cardimg="/Not ESPN.png"
          />
        </div>
        <div className="col">
          <Card
            name="JavaScript Quiz"
            projectname="JavaScript Quiz"
            titlecolor="midnightblue"
            cardimg="/Quiz Game.png"
          />
        </div>
        <div className="col">
          <Card
            name="Day Planner"
            projectname="Day Planner"
            titlecolor="midnightblue"
            cardimg="Day Planner.png"
          />
        </div>
        <div className="col">
          <Card
            name="Weather Dashboard"
            projectname="Weather Dashboard"
            titlecolor="midnightblue"
            cardimg="Weather Dashboard.png"
          />
        </div>
        <div className="col">
          <Card
            name="Placeholder"
            projectname="Placeholder"
            titlecolor="midnightblue"
            cardimg="https://upload.wikimedia.org/wikipedia/commons/6/6b/Taka_Shiba.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;